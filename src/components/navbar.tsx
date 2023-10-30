import React from "react";
import { ModeToggle } from "./toggleMode";

function Navbar() {
  return (
    <div className="flex w-full items-center justify-center bg-primary px-4 py-2">
      <p className="grow text-secondary">ic-ETITE&apos;24</p>
      <ModeToggle />
    </div>
  );
}

export default Navbar;
