import { Sora } from "next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

// font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site bg-cover bg-no-repeat ${sora.variable} font-sora text-white relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
