import logoWhite from "../../assets/logo-light.svg";
import { FooterButton } from "./FooterButton";

export const Footer = () => (
  <div className="flex h-32 flex-col justify-center bg-darkblue">
    <div className="flex items-center justify-between bg-darkblue px-4 sm:px-10 lg:px-28 ">
      <img src={logoWhite} alt="logo-navbar" className="w-24" />
      <FooterButton />
    </div>
  </div>
);
