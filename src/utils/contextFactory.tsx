/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useMemo, useState } from "react";

interface IStore {
  key: string;
  store: Record<string, any>;
  setStore: (payload: Record<string, any>) => void;
}

const getCtxProvider =
  (key: string, defaultValue: Record<string, any>, AppContext: React.Context<IStore>) =>
  ({ children }: IProp) => {
    const [store, setStore] = useState(defaultValue);
    const value = useMemo(
      () => ({
        key,
        store,
        setStore,
      }),
      [],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };

const cxtCache: Record<string, Cxt> = {};

class Cxt {
  defaultStore: IStore;

  AppContext: React.Context<IStore>;

  Provider: ({ children }: IProp) => JSX.Element;

  constructor(key: string, defaultValue: Record<string, any>) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => {},
    };
    this.AppContext = React.createContext(this.defaultStore);
    this.Provider = getCtxProvider(key, defaultValue, this.AppContext);

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
