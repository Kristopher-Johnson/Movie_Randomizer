"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import classes from "./Login.module.css";
import Button from "../components/ui/Button";

import { doc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app, db } from "../../firebase";

// const db = getFirestore(app);

// async function addUser(
//   email: string,
//   firstname: string,
//   lasename: string,
//   password: string
// ) {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: { firstname },
//       last: { lasename },
//       email: { email },
//       password: { password },
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

// async function getUsers() {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   console.log(querySnapshot);
// }

// async function getUser() {
//   const docRef = doc(db, "users", "7h1TJWZIQcfP0Lh4OAsK");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }

// getUsers();
// getUser();
// console.log("test");

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onClickLoginHandler() {
    console.log(userName);
    console.log(password);
  }

  return (
    <div className={classes["page_center"]}>
      <form className={classes["parent"]}>
        <div className={classes["title"]}>
          <h1>Movie Randomizer</h1>
        </div>
        <div className={classes["div1"]}>
          <label>Username</label>
          <TextField onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={classes["div2"]}>
          <label>Password</label>
          <TextField onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={classes["div3"]}>
          <div className={classes["button-1"]}>
            <Link href={""}>
              <Button onClick={onClickLoginHandler}>Login</Button>
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
