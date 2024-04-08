"use client";
import React, { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";

import styles from "./Verify.module.scss";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import axiosRequest from "@/entities/api/baseUrl";
export const VerifyPage = () => {
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const router = useRouter();
  const handleClick = () => {
    axiosRequest
      .post("/verify-code", {
        code,
        phone: searchParams.get("phone"),
      })
      .then((result) => {
        router.push("/chats");
      });
  };
  return (
    <div className={styles.VerifyPage}>
      <Typography className="text-center mb-5">Подтвердите SMS Code</Typography>
      <ReactInputVerificationCode onCompleted={(e) => setCode(e)} />
      <Button fullWidth className="mt-[30px] text-sm" onClick={handleClick}>
        Подтвердить
      </Button>
    </div>
  );
};
