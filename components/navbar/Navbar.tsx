import React from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartBtn from "./CartBtn";
import DarkMode from "./DarkMode";
import LinksDropDown from "./LinksDropDown";
import { IoMoonOutline } from "react-icons/io5";
import { Suspense } from "react";

function Navbar() {
  return (
    <nav className="border-b border-border">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartBtn />
          <DarkMode />
          <LinksDropDown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
