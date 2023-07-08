import React from "react";
import TextField from "../components/ui/TextField";
import Link from "next/link";
import classes from "./Login.module.css";
import Button from "../components/ui/Button";

export default function Login() {
  return (
    <div className={classes["page_center"]}>
      <form className={classes["parent"]}>
        <div className={classes["title"]}>
          <h1>Movie Randomizer</h1>
        </div>
        <div className={classes["div1"]}>
          <label>Username</label>
          <TextField inputID={"input1"} />
        </div>
        <div className={classes["div2"]}>
          <label>Password</label>
          <TextField inputID={"input2"} />
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
      </form>
    </div>
  );
}
