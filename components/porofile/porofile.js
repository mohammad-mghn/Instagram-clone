import React, { useEffect } from "react";
import style from "./porofile.module.css";
function Porofile(props) {
  return <div className={style.container}>{props.user.id}</div>;
}

export default Porofile;
