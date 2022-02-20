import React from "react";
import styles from "./direct.module.css";
function Direct(props) {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <div className={props.active ? styles.img_main_container : ""}>
          <img className={styles.img_porofile} src={props.ImgSrc} alt="" />
        </div>
      </div>
      <div className={styles.information_container}>
        <h3 className={styles.username}>{props.username}</h3>
        <h5 className={styles.active_status}>{props.activity}</h5>
      </div>
    </div>
  );
}

export default Direct;
