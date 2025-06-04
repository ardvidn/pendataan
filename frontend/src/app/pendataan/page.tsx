/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import useAuth from "@/utils/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const pendataan = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }

    if (!loading && user) {
      router.push("/pendataan/op_baru");
    }
  }, [user, loading, router]);

  if (loading || !user) return <p>Loading...</p>;
  return null;
};

export default pendataan;
