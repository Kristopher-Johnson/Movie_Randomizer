import React, { ReactElement, ReactNode, ReactPortal } from "react";
import { PropsWithChildren } from "react";
import classes from "./button.module.css";

const Button = (props: any) => {
  return (
    <button
      className={classes["button-40"]}
      onClick={props.onClick}
      role="button"
    >
      {props.children}
    </button>
  );
};

export default Button;
