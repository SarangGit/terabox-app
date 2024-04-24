/** @type {import('next').NextConfig} */
const nextConfig = {
 async headers() {
        return [
            {
                // matching all API routes
                source: "/api/*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "https://diskwala.com, https://www.diskwala.com" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept,auth-token, Accept-Version, Content-Length, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }

};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.4funbox.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "data.terabox.app",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
