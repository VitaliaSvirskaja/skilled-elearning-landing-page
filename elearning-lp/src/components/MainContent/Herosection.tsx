import { HerosectionButton } from "./HerosectionButton";
import heroImageMobile from "../../assets/image-hero-mobile@2x.webp";

export const Herosection = () => {
  return (
    <div className="flex flex-col gap-7 pt-5 items-start">
      <h1 className="headingL space-y-1">Maximize skill, minimize budget</h1>
      <p className="bodyM">
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>
      <HerosectionButton />
      <img src={heroImageMobile} alt="hero-image" />
    </div>
  );
};
