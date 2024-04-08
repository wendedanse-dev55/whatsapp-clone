import React from "react";
import styles from "./ChatListHeaderInterface.module.scss";
import { DefaultImageUser } from "@/shared/ui/DefaultImageUser";
import Image from "next/image";
import groupIcon from "@/shared/assets/chat-interface-header/people.svg";
import statusIcon from "@/shared/assets/chat-interface-header/status.svg";
import newChatIcon from "@/shared/assets/chat-interface-header/new-chat.svg";
import menuIcon from "@/shared/assets/chat-interface-header/menu.svg";
const icons = [groupIcon, statusIcon, newChatIcon, menuIcon];
export const ChatListHeaderInterface = () => {
  return (
    <div className={styles.chatHeader}>
      <DefaultImageUser />
      <div className={styles.icons}>
        {icons.map((item) => (
          <div>
            <Image src={item} width={24} height={24} alt="icon" />
          </div>
        ))}
      </div>
    </div>
  );
};
