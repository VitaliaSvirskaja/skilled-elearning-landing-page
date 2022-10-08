import logoBlack from "../../assets/logo-dark.svg";
import { NavbarButton } from "./NavbarButton";

export const Navbar = () => {
  return (
    <div className="m-4 flex h-12 items-center justify-between sm:mx-10 sm:my-8">
      <img src={logoBlack} alt="logo-navbar" className="w-24" />
      <NavbarButton />
    </div>
  );
};
