import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full">
      <Navbar className="w-full bg-gradient-to-t from-purple-400 to-pink-400">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <img src="logo.png" alt="Aspataal Logo" height={40} width={40} />
            <p className="font-bold text-xl font-serif">Aspataal</p>
          </div>
        </NavbarBrand>
      </Navbar>
      <Outlet />
    </div>
  );
}
