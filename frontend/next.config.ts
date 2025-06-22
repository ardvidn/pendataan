import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fotopersil-demo.s3.ap-southeast-2.amazonaws.com", // Moved from domains to remotePatterns
      },
      // {
      //   protocol: "https",
      //   hostname: "webgis-backend-server.onrender.com",
      //   // port: '8080', // Adjust to match your backend port
      //   pathname: "/public/fotopersil/**", // Modify based on your folder structure
      // },
    ],
  },
};

export default nextConfig;
