"use client";
import React, { useEffect } from "react";
import styles from "./ChatContentFooter.module.scss";
import { CreateAudio } from "@/features/CreateAudio";
import { createAudioHelpers } from "@/features/CreateAudio/ui/CreateAudio.helpers";
import { useCounter } from "@/shared/hooks/useCounter";
import { CanvasAudio } from "@/features/CanvasAudio";
export const ChatContentFooter = () => {
  const { isListen, setIsListen, handleClickMicrophone } = createAudioHelpers();
  const { time, reset, start } = useCounter();
  return (
    <div className={styles.Footer}>
      <canvas id="voiceAnimation" width="180" height="28"></canvas>
      <CreateAudio />
      <CanvasAudio />
    </div>
  );
};
