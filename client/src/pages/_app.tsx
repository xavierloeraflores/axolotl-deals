import { type AppType } from "next/app";
import { api } from "npm/utils/api";
import "npm/styles/globals.css";
import RootLayout from "@/components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default api.withTRPC(MyApp);
