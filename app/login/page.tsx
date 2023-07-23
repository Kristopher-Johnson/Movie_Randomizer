"use client";

import React from "react";
import TextField from "../components/ui/TextField";
import Link from "next/link";
import classes from "./Login.module.css";
import Button from "../components/ui/Button";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import db from "../../firebase";

// const db = getFirestore(firebase);

function addUser(
  email: string,
  firstname: string,
  lasename: string,
  password: string
) {
  try {
    const docRef = addDoc(collection(db, "users"), {
      first: { firstname },
      last: { lasename },
      email: { email },
      password: { password },
    });
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const docRef = doc(db, "users", "6x7unXdKXovZjJHnRNe9");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

// console.log("here");

const querySnapshot = await getDocs(collection(db, "users"));
console.log(querySnapshot.docs);

// console.log("test");

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
