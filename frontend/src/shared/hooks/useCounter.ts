import { useState } from "react";

export const useCounter = () => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });

  const [intervalId, setIntervalId] = useState<string | NodeJS.Timeout>("");

  const updateTimer = () => {
    setTime((prev) => {
      let newTime = { ...prev };
      if (newTime.sec < 59) newTime.sec += 1;
      else {
        newTime.min += 1;
        newTime.sec = 0;
      }
      if (newTime.min === 60) {
        newTime.min = 0;
        newTime.hr += 1;
      }

      return newTime;
    });
  };

  const pauseOrResume = () => {
    if (!intervalId) {
      let id = setInterval(updateTimer, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId("");
    }
  };

  const reset = () => {
    clearInterval(intervalId);
    setTime({
      sec: 0,
      min: 0,
      hr: 0,
    });
  };
  return {
    start: pauseOrResume,
    reset,
    time,
  };
};
