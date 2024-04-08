"use client";

import React, { ReactNode } from "react";
import styles from "./Chats.module.scss";
import { ChatList } from "@/widgets/ChatList";
import { ChatListHeaderInterface } from "@/widgets/ChatListHeaderInterface";
import { TextField } from "@/shared/ui/TextField";
import filterIcon from "@/shared/assets/icons/filter.svg";
import Image from "next/image";
interface IProps {
  children: ReactNode;
}

export const ChatsWrapper = ({ children }: IProps) => {
  return (
    <div className={styles.ChatWrapper}>
      <div className={styles.ChatList}>
        <ChatListHeaderInterface />
        <div className={styles.ChatSearchWrapper}>
          <TextField
            fullWidth={true}
            withSearch={true}
            placeholder="Поиск чатов или новый чат"
          />
          <Image src={filterIcon} alt="Filter" />
        </div>
        <ChatList />
      </div>
      <div className={styles.ChatContent}>{children}</div>
    </div>
  );
};
