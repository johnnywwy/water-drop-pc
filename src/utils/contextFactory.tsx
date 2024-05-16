/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useContext, useMemo, useState } from "react";
import { IPropChild } from "./types";

interface IStore<T> {
  key: string;
  store: T;
  setStore: (payload: Partial<T>) => void;
}

function getCxtProvider<T>(key: string, defaultValue: T, AppContext: React.Context<IStore<T>>) {
  return ({ children }: IPropChild) => {
    const [store, setStore] = useState(defaultValue);
    const value = useMemo(
      () => ({
        key,
        store,
        setStore: (payload = {}) =>
          setStore((state) => ({
            ...state,
            ...payload,
          })),
      }),
      [store],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
}
// ({ children }: IProp) => {
//   const [store, setStore] = useState(defaultValue);
//   const value = useMemo(
//     () => ({
//       key,
//       store,
//       setStore,
//     }),
//     [],
//   );

//   return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
// };

const cxtCache: Record<string, Cxt> = {};

class Cxt<T = any> {
  defaultStore: IStore<T>;

  AppContext: React.Context<IStore<T>>;

  Provider: ({ children }: IPropChild) => JSX.Element;

  constructor(key: string, defaultValue: T) {
    this.defaultStore = {
      key,
      store: defaultValue,
      // eslint-disable-next-line prettier/prettier
      setStore: () => {},
    };
    this.AppContext = React.createContext(this.defaultStore);
    this.Provider = getCxtProvider(key, defaultValue, this.AppContext);

    cxtCache[key] = this;
  }
}

export const useAppContext = (key: string) => {
  const cxt = cxtCache[key];
  const app = useContext(cxt.AppContext);
  if (!cxt) {
    throw new Error(`Context ${key} not found`);
  }
  return {
    store: app.store,
    setStore: app.setStore,
  };
};

export const connectFactory = (key: string, defaultValue: Record<string, any>) => {
  const cxt = cxtCache[key];
  let CurCxt: Cxt;
  if (cxt) {
    CurCxt = cxt;
    // return cxt.Provider;
  } else {
    CurCxt = new Cxt(key, defaultValue);
  }

  // CxtProvider = new Cxt(key, defaultValue);
  return (Child: React.FunctionComponent<any>) => (props: any) => (
    <CurCxt.Provider>
      <Child {...props} />
    </CurCxt.Provider>
  );
};
