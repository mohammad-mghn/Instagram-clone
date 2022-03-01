import React from "react";
import styles from "../../components/navbar/navbar.module.css";
const Inbox = () => {
  return (
    <div className={styles.likes}>
      <div className={styles.likes_array}></div>
      <h6 className={styles.empty_txt}>Empty</h6>
    </div>
  );
};

export default Inbox;
