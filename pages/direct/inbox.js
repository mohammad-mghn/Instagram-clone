import React from "react";
import styles from "../../styles/direct.module.css";
import Direct from "../../components/direct/direct";
import Loading from "../../components/loading/loading";
import { useRouter } from "next/router";
import New from "./new";
import {
  Megajs,
  SendButton,
  DownButton,
  NewChatButton,
  IliaPic,
  VitoPicture,
} from "../../Assists/svgs/svgs";
import { useState } from "react";
function Inbox() {
  const router = useRouter();
  const [loading, setloading] = useState(40);
  const [newChat, senewChat] = useState(true);
  return (
    <Loading width={loading}>
      <div
        onLoadCapture={() => {
          setTimeout(() => {
            setloading(90);
          }, 250);
        }}
        className={styles.container}
      >
        <section
          onLoadCapture={() => {
            setTimeout(() => {
              setloading(100);
            }, 500);
          }}
          className={styles.contacts_container}
        >
          <div className={styles.account_new_chat}>
            <div className={styles.account}>
              <div className={styles.account_text}>vito.mohagheghian</div>
              {DownButton}
            </div>
            <div className={styles.new_chat_button}>{NewChatButton}</div>
          </div>
          <div className={styles.chat_section_container}>
            <Direct
              ImgSrc={IliaPic}
              username={"ilia gharahi"}
              activity={"Active today"}
              active={false}
            />
            <Direct
              ImgSrc={VitoPicture}
              username={"vito.mohagheghian"}
              activity={"Active today"}
              active={true}
            />
            <Direct
              ImgSrc={Megajs}
              username={"‎مرجع تخصصی آموزش جاوااسکریپت‎"}
              activity={"Active today"}
              active={true}
            />

            {/* <Direct /> */}
          </div>
        </section>
        <section className={styles.messages_container}>
          <div className={styles.send_icon}>{SendButton}</div>
          <div className={styles.your_massage}>Your Messages</div>
          <div className={styles.description}>
            Send private photos and messages to a friend or group.
          </div>
          <div className={styles.send_button_div}>
            <button
              onClick={() => {
                router.push("/direct/new");
              }}
              className={styles.send_button}
            >
              Send Message
            </button>
          </div>
        </section>
      </div>
    </Loading>
  );
}

export default Inbox;
