import React from "react";
import styles from "./ChatList.module.scss";
import { User } from "@/shared/ui/User";
export const ChatList = () => {
  return (
    <div className={styles.ChatList}>
      <User name="Kutya" id={1} />
      <User name="Kutya" id={2} />
    </div>
  );
};
