import React from "react";
import TextField from "../components/ui/TextField";
import Link from "next/link";

export default function Register() {
  return (
    <div>
      <div>
        <h1>Username</h1>
        <TextField inputID={"input1"} />
      </div>
      <div>
        <h1>Email</h1>
        <TextField inputID={"input2"} />
      </div>
      <div>
        <h1>Password</h1>
        <TextField inputID={"input3"} />
      </div>
      <div>
        <h1>Repeat Password</h1>
        <TextField inputID={"input4"} />
      </div>
      <div>
        <Link href={"/user/randomizer"}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
