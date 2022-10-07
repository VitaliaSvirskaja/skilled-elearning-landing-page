import logoBlack from "../../assets/logo-dark.svg";
import { NavbarButton } from "./NavbarButton";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center m-4 sm:mx-10 sm:my-8 h-12">
      <img src={logoBlack} alt="logo-navbar" className="w-24" />
      <NavbarButton />
    </div>
  );
};
