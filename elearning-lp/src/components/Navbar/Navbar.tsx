import logoBlack from "../../assets/logo-dark.svg";
import { NavbarButton } from "./NavbarButton";

export const Navbar = () => (
  <div className="z-50 m-4 flex h-12 items-center justify-between sm:my-8 sm:mx-10 lg:mx-28">
    <img src={logoBlack} alt="logo-navbar" className="w-24" />
    <NavbarButton />
  </div>
);
