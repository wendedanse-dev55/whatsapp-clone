"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import styles from "./PhoneNumber.module.scss";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import { useRouter } from "next/navigation";
import axiosRequest from "@/entities/api/baseUrl";

export const PhoneNumber = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleClick = () => {
    axiosRequest.post("/auth", { phone }).then((result) => {
      console.log("????");
      router.push(`/verify?phone=${phone}`);
    });
  };
  return (
    <div className={styles.PhoneNumber}>
      <Typography className="text-center mb-5">Введите номер</Typography>
      <PhoneInput
        country={"us"}
        value=""
        inputStyle={{
          width: "100%",
        }}
        onChange={(e) => setPhone(e)}
      />
      <Button fullWidth className="mt-[30px] text-sm" onClick={handleClick}>
        Отправить
      </Button>
    </div>
  );
};
