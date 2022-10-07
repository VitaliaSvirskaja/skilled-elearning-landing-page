import logoWhite from "../../assets/logo-light.svg";
import { FooterButton } from "./FooterButton";

export const Footer = () => {
  return (
    <div className="bg-darkblue h-32 flex flex-col justify-center">
      <div className="flex justify-between items-center bg-darkblue mx-4 sm:mx-10 ">
        <img src={logoWhite} alt="logo-navbar" className="w-24" />
        <FooterButton />
      </div>
    </div>
  );
};
