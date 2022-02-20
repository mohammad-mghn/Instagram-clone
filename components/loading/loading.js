import React from "react";

import styles from "./loading.module.css";
function Loading(props) {
  return (
    <div>
      <div
        style={{
          width: `${props.width}%`,
          display: props.width === 100 ? "none" : "block",
        }}
        className={styles.loading}
      ></div>
      {props.children}
    </div>
  );
}

export default Loading;
