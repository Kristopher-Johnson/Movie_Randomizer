"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import Button from "../components/ui/Button";
import classes from "./Register.module.css";
import validator from "validator";
import app from "../../firebase";
import { getFirestore } from "firebase/firestore";

export default function Register() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  //Adds user to user database and firebase authentication database
  async function registerUser(
    email: string,
    username: string,
    password: string
  ) {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username: { username },
        email: { email },
        movieList: [],
      });
      console.log("User added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding user");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function validUsername(username: string) {
    return true;
  }

  function validPassword(password: string, repeatPassword: string) {
    validator.isStrongPassword("minLength: 8");
    return true;
  }

  function validateEmail(email: string) {
    if (validator.isEmail(email)) {
      // userSignInMethods.length > 0;

      return true;
    } else {
      return false;
    }
  }

  function onClickRegisterHandler() {
    if (
      email != "" &&
      password != "" &&
      repeatPassword != "" &&
      username != ""
    ) {
      if (
        validateEmail(email) &&
        validPassword(password, repeatPassword) &&
        validUsername(username)
      ) {
        registerUser(email, username, password);
      }
    } else {
      alert("Please fill out the form");
    }
  }

  return (
    <div className={classes["page_center"]}>
      <form className={classes["parent"]}>
        <div>
          <h1>Username</h1>
          <TextField onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <h1>Email</h1>
          <TextField onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <h1>Password</h1>
          <TextField onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <h1>Repeat Password</h1>
          <TextField onChange={(e) => setRepeatPassword(e.target.value)} />
        </div>
        <div>
          <div>
            <Button onClick={onClickRegisterHandler}>Register</Button>
          </div>
          <div>
            <Link href={"/"}>
              <Button>Sign in</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
