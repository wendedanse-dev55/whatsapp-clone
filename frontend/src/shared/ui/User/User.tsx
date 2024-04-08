"use client";
import React from "react";
import styles from "./User.module.scss";
import { IUser } from "@/shared/ui/User/User.interface";
import { DefaultImageUser } from "@/shared/ui/DefaultImageUser";
import { MessageIsReaded } from "@/shared/ui/MessageIsReaded";
import Link from "next/link";
import clsx from "clsx";
import { useParams } from "next/navigation";

export const User = (props: IUser) => {
  const { image, name, lastMessage, lastMessageDate, id } = props;
  const { id: paramsId } = useParams();

  return (
    <Link href={`/chats/${id}`} className={styles.User}>
      <div
        className={clsx(styles.UserWrapper, {
          [styles.active]: Number(paramsId) === id,
        })}
      >
        <div className={styles.UserImg}>
          <DefaultImageUser size="medium" />
        </div>
        <div className={styles.UserInfo}>
          <div className={styles.UsernameWrapper}>
            <div>
              <div className={styles.Username}>+996 551 130 909</div>
              <div className={styles.MessageWrapper}>
                <MessageIsReaded />
                <div className={styles.Message}>Круто</div>
              </div>
            </div>
            <div className={styles.lastDate}>Понедельник</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
