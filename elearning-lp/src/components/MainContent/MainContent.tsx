import { Herosection } from "./Herosection";
import { Features } from "./Features";

export const MainContent = () => (
  <div className="mx-auto flex flex-col px-4 sm:gap-52 sm:px-10 lg:px-28">
    <Herosection />
    <Features />
  </div>
);
