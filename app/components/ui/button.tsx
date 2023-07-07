import React, { ReactElement, ReactPortal } from "react";
import { PropsWithChildren } from "react";
import classes from "./button.module.css";

const Button = (props: PropsWithChildren) => {
  return (
    <button className={classes["button-40"]} role="button">
      {props.children}
    </button>
  );
};

export default Button;
