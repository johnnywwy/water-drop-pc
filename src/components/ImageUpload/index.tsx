import { useState, useEffect } from "react";

// import style from "./index.module.less";

/**
 *
 */
const ImageUpload = () => {
  const [state, setState] = useState();
  useEffect(() => {
    console.log(state, setState);
  }, []);
  return <div>ImageUpload</div>;
};

export default ImageUpload;
