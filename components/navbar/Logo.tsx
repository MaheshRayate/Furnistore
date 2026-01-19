import React from "react";
import { Button } from "../ui/button";
import { BsAspectRatioFill } from "react-icons/bs";
import Link from "next/link";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <BsAspectRatioFill className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
