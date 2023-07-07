import Image from "next/image";
import classes from "./Textfield.module.css";

export default function TextField() {
  return (
    <div>
      <input className={classes.field}></input>
    </div>
  );
}
