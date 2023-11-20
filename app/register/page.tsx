"use client";

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { doc, collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import Button from "../components/ui/Button";
import classes from "./Register.module.css";
import validator from "validator";
import { app, auth, db } from "../../firebase";
import { getFirestore } from "firebase/firestore";

export default function Register() {
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
      await createUserWithEmailAndPassword(auth, email, password).catch(
        (err) => {
          console.log(err);
        }
      );
      if (auth.currentUser != null) {
        await sendEmailVerification(auth.currentUser).catch((err) => {
          console.log(err);
        });
        await updateProfile(auth.currentUser, { displayName: username }).catch(
          (err) => {
            console.log(err);
          }
        );
        const docRef = await addDoc(collection(db, "users"), {
          username: { username },
          email: { email },
          movieList: [],
        });
        console.log("User added with ID: ", docRef.id);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function validUsername(username: string) {
    return true;
  }

  function validPassword(password: string, repeatPassword: string) {
    if (password != repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Passwords must be atleast 8 charactors");
      return;
    }
    console.log("Valid Password");
    return true;
  }

  function validateEmail(email: string) {
    if (validator.isEmail(email)) {
      console.log("Valid Email");
      return true;
    } else {
      return false;
    }
  }

  function onSubmitHandler(event: any) {
    event.preventDefault();
    if (
      email != "" &&
      password != "" &&
      repeatPassword != "" &&
      username != ""
    ) {
      if (
        validUsername(username) &&
        validateEmail(email) &&
        validPassword(password, repeatPassword)
      ) {
        registerUser(email, username, password);
      }
    } else {
      alert("Please fill out the form");
    }
  }

  return (
    <div className={classes["page_center"]}>
      <form onSubmit={onSubmitHandler} className={classes["parent"]}>
        <div className={classes["title"]}>
          <h1>Movie Randomizer</h1>
        </div>
        <div className={classes["div1"]}>
          <h1>Username</h1>
          <TextField onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={classes["div1"]}>
          <h1>Email</h1>
          <TextField onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={classes["div1"]}>
          <h1>Password</h1>
          <TextField onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={classes["div1"]}>
          <h1>Repeat Password</h1>
          <TextField onChange={(e) => setRepeatPassword(e.target.value)} />
        </div>
        <div className={classes["div3"]}>
          <div className={classes["button-1"]}>
            <Button type="submit">Register</Button>
          </div>
          <div className={classes["button-2"]}>
            <Link href={"/"}>
              <Button>Sign in</Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
