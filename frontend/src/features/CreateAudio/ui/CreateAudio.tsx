import React from "react";
import styles from "./CreateAudio.module.scss";
import { IProps } from "@/features/CreateAudio/ui/CreateAudio.interface";
import { FaMicrophone } from "react-icons/fa";

export const CreateAudio = (props: IProps) => {
  return (
    <div className={styles.CreateAudio}>
      <FaMicrophone fill="#54656F" fontSize="22" />
    </div>
  );
};
