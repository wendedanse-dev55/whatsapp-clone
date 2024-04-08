import React from "react";
import styles from "./ChatContent.module.scss";
import bgChat from "@/shared/assets/chatContent/defaultBg.png";
export const ChatContent = () => {
  console.log({ bgChat });
  return (
    <div
      className={styles.ChatContent}
      style={{ backgroundImage: `url(${bgChat?.src})` }}
    >
      4124124
    </div>
  );
};
