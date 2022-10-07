import { Herosection } from "./Herosection";
import { Features } from "./Features";

export const MainContent = () => {
  return (
    <div className="px-4 sm:px-10 flex flex-col sm:gap-52 container mx-auto">
      <Herosection />
      <Features />
    </div>
  );
};
