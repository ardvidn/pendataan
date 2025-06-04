"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const PenggunaPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/pendataan/master/pengguna/role");
  }, [router]);
  return null;
};

export default PenggunaPage;
