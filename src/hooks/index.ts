import { useEffect } from "react";

/*
 * 设置网页标题
 * @param {string} title 标题
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
