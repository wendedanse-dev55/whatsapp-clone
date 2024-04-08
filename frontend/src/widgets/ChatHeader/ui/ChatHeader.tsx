import React from "react";
import styles from "./ChatHeader.module.scss";
import Image from "next/image";
import menu from "@/shared/assets/chat-interface-header/menu.png";
import search from "@/shared/assets/input-search/search.png";
import { IoIosSearch } from "react-icons/io";
import { GoKebabHorizontal } from "react-icons/go";
import { BsCameraVideoFill } from "react-icons/bs";

export const ChatHeader = () => {
  return (
    <div className={styles.ChatHeader}>
      <div className={styles.ChatHeaderUser}>
        <div className={styles.ChatHeaderUserImage}>
          <Image
            src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg"
            width={60}
            height={60}
            alt="img"
          />
        </div>
        <div className={styles.ChatHeaderUserInfo}>
          <div className={styles.name}>Kutman Brat</div>
          <div className={styles.date}>был(-а) сегодня в 15:24</div>
        </div>
      </div>
      <div className={styles.ChatHeaderIcons}>
        <button>
          <BsCameraVideoFill fill="#6B7C85" />
        </button>
        <button>
          <IoIosSearch width={18} />
        </button>
        <button>
          <GoKebabHorizontal />
        </button>
      </div>
    </div>
  );
};
