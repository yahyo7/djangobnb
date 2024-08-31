import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/modals/Modal";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DjangoBnb",
  description: "Airbnb Clone - book your stay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const test = (<p>Hello</p>)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>

      <LoginModal/>
      <SignupModal/>
      </body>
    </html>
  );
}
