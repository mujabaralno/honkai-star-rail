import Header from "@/components/shared/Header";
import React from "react";
import "../globals.css";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
    return (
      <html lang="en" className=''>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
      </html>
    );
  }