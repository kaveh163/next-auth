/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "iranfile.net",
          port: "",
          pathname: "/img/5/logoY.png",
        },
        {
          protocol: "https",
          hostname: "iranfile.net",
          port: "",
          pathname: "/img/5/welcomephoto.png",
        }
      ],
    },
  };
  
  export default nextConfig;
  