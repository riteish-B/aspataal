import { Navbar, NavbarBrand } from "@nextui-org/react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full bg-slate-800 text-white">
      <Navbar className="w-full bg-gradient-to-t from-purple-400 to-pink-400 text-slate-800">
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
