import React from "react";
import TextField from "../components/ui/textField";
import Link from "next/link";
import classes from "./Login.module.css";
import Button from "../components/ui/button";

export default function Login() {
  return (
    <div className={classes["page_center"]}>
      <div className={classes["parent"]}>
        <div className={classes["title"]}>
          <h1>Movie Randomizer</h1>
        </div>
        <div className={classes["div1"]}>
          <h1>Username</h1>
          <TextField />
        </div>
        <div className={classes["div2"]}>
          <h1>Password</h1>
          <TextField />
        </div>
        <div className={classes["div3"]}>
          <div className={classes["button-1"]}>
            <Link href={"/user/randomizer"}>
              <Button>Login</Button>
            </Link>
          </div>
          <div className={classes["button-2"]}>
            <Link href={"/register"}>
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
