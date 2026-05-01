import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SkillSphere – Online Learning Platform",
  description: "Explore courses and upgrade your skills with SkillSphere.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="golden"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen font-[var(--font-poppins)]">
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
        />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}