/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { logged } from "@/utils/interface";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const pendataan = () => {
  const router = useRouter();
  useEffect(() => {
    axios
      .get<logged>(`${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        if (!res.data.loggedIn) router.push("/login");
      })
      .catch(() => router.push("/login"));
  }, [router]);
  return (
    <>
      <div>asdad</div>
    </>
  );
};

export default pendataan;
