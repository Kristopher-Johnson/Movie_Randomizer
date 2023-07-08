import React from "react";
import Randomizer from "./randomizer/page";
import Navbar from "./navbar/NavBar";
import Footer from "./footer";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <br />
      {/* <Footer /> */}
    </div>
  );
}
