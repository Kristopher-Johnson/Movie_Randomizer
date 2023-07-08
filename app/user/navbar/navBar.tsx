"use client";

import React, { useState } from "react";
import Image from "next/image";
// import Logo from "./Logo";
import NavItem from "./NavItem";
import Link from "next/link";
import classes from "./NavBar.module.css";
import Randomizer from "../randomizer/page";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const MENU_LIST = [
    { text: "Randomizer", href: "/user/randomizer" },
    { text: "All Movies", href: "/user/all_movies" },
    { text: "Profile", href: "/user/profile" },
  ];

  const pathname = usePathname();

  // navActive: Boolean;

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.nav_div}>
          <h1 className={classes.logo}>Movie Selector</h1>
          <div className={classes.nav_items}>
            {/* maps items in MENU_LIST to individual <NavItem/> creating nav bar */}
            {MENU_LIST.map((link, id) => (
              <div>
                <div>
                  {/* passes current url path and link object to nav item */}
                  <NavItem curPage={pathname} {...link} />
                </div>
                <div>
                  {/* Checks if last element in MENU_LIST if not then add "|" if it
                is then doesnt add "|" */}
                  {id == MENU_LIST.length - 1 ? (
                    ""
                  ) : (
                    <h1 className={classes.seperator}>|</h1>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
