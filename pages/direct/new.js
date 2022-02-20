import React from "react";
import styles from "../../styles/direct.module.css";
import { useRouter } from "next/router";
function New() {
  const router = useRouter();
  return (
    <div className={styles.new_chat_background}>
      <div className={styles.new_chat}>
        <header className={styles.new_chat_header}>
          <div className={styles.exit_div}>
            <svg
              aria-label="Close"
              className={styles.exit_button}
              color="#262626"
              fill="#262626"
              height="18"
              role="img"
              viewBox="0 0 24 24"
              width="18"
              onClick={() => {
                router.push("/direct/inbox");
              }}
            >
              <polyline
                fill="none"
                points="20.643 3.357 12 12 3.353 20.647"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              ></polyline>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                x1="20.649"
                x2="3.354"
                y1="20.649"
                y2="3.354"
              ></line>
            </svg>
          </div>
          <div className={styles.New_chat_title}>New Message</div>
          <div className={styles.next_button}>Next</div>
        </header>
        <section className={styles.to_section}>
          <div className={styles.to_title}>To:</div>
          <div className={styles.to_input_div}>
            <input
              type="text"
              placeholder="Search..."
              className={styles.to_input}
            />
          </div>
        </section>
        <div className={styles.suggested_title}>Suggested</div>
      </div>
    </div>
  );
}

export default New;
