import { Herosection } from "./Herosection";
import { Features } from "./Features";

export const MainContent = () => {
  return (
    <div className="mx-auto flex flex-col px-4 sm:gap-52 sm:px-10">
      <Herosection />
      <Features />
    </div>
  );
};
