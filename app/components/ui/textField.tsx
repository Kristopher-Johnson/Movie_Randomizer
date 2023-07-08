import Image from "next/image";
import classes from "./Textfield.module.css";
import { PropsWithChildren, ReactNode } from "react";

interface PostProps {
  inputID: string;
}

export default function TextField(props: PostProps): ReactNode {
  return (
    <input
      type="text"
      id={props.inputID}
      name={props.inputID}
      className={classes.field}
    ></input>
  );
}
