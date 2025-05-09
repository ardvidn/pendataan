/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import useAuth from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import { logged } from "../../utils/interface";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";

const pendataan = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await axios.get<logged>(
  //         `${process.env.NEXT_PUBLIC_PENDATAAN_API_URL}/api/auth/me`,
  //         { withCredentials: true, timeout: 5000 } // Tambah timeout
  //       );

  //       if (!res.data.loggedIn) {
  //         router.push("/login");
  //       }
  //     } catch (error) {
  //       console.error("Auth check failed:", error);
  //       router.push("/login"); // Pastikan redirect saat error
  //     }
  //   };

  //   checkAuth();
  // }, [router]);

  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return <p>Loading...</p>;
  return (
    <>
      <div>asdad</div>
    </>
  );
};

export default pendataan;
