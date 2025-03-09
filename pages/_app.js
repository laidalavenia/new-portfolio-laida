import "../styles/globals.css";
import Layout from "../components/Layout";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="page w-full h-screen">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
