import ClientLayout from "@/components/ClientLayout";

import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PendataanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          backgroundColor: "#1a1a2e",
          color: "white",
        }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </div>
  );
}
