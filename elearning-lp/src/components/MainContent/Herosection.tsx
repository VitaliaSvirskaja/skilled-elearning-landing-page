import { HerosectionButton } from "./HerosectionButton";
import heroImageMobile from "../../assets/image-hero-mobile@2x.webp";
import heroImageTablet from "../../assets/image-hero-tablet@2x.webp";
import heroImageDesktop from "../../assets/image-hero-desktop@2x.webp";

export const Herosection = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:relative sm:h-96 sm:items-center">
      <div className="flex flex-col items-start gap-7 pt-5 sm:w-[25rem]">
        <h1 className="headingL space-y-1">Maximize skill, minimize budget</h1>
        <p className="bodyM">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <HerosectionButton />
      </div>
      <picture className="sm:absolute sm:-top-36 sm:-right-72 sm:w-[40rem]">
        <source srcSet={heroImageDesktop} media="(min-width: 1390px)" />
        <source srcSet={heroImageTablet} media="(min-width: 640px)" />
        <img src={heroImageMobile} alt="hero-image" className="mt-4" />{" "}
      </picture>
    </div>
  );
};
