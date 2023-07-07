import React from "react";
import Link from "next/link";
import classes from "./NavBar.module.css";

const NavItem = ({
  text,
  href,
  curPage,
}: {
  text: string;
  href: string;
  curPage: string;
}) => {
  return (
    <Link href={href}>
      <h1
        // compares current path with the nav button currently being generated
        // is the same uses active classname which changes the colour
        className={
          classes[`${curPage == href ? "nav__link_active" : "nav__link"}`]
        }
      >
        {text}
      </h1>
    </Link>
  );
};

export default NavItem;
