// "use client";

import React, { useState } from "react";
import LoginPage from "./login/page";

export default function Home() {
  const auth: boolean = false;

  //Load Login Page If Not Authed
  if (auth == false) {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }

  //Load Main Page if Authed
  if (auth == true) {
    return <div></div>;
  }
}

//rfc react functional component
