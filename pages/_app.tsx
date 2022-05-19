import type { AppProps } from "next/app";
import "../styles/globals.css";
import "antd/dist/antd.css";
import "bootstrap-utilities/bootstrap-utilities.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
