import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuizSource",
  description: "QuizSource is a quiz app that allows you to create and share quizzes with your friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="container">
            <div className="wrapper">
                <Navbar />
                    {children}
                <Footer />
            </div>
          </div>
      </body>
    </html>
  );
}
