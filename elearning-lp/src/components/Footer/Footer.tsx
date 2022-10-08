import logoWhite from "../../assets/logo-light.svg";
import { FooterButton } from "./FooterButton";

export const Footer = () => {
  return (
    <div className="flex h-32 flex-col justify-center bg-darkblue">
      <div className="mx-4 flex items-center justify-between bg-darkblue sm:mx-10 ">
        <img src={logoWhite} alt="logo-navbar" className="w-24" />
        <FooterButton />
      </div>
    </div>
  );
};
