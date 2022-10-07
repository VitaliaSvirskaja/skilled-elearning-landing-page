import { Herosection } from "./Herosection";
import { Features } from "./Features";

interface Props {}

export const MainContent = (props: Props) => {
  return (
    <div className="">
      <Herosection />
      <Features />
    </div>
  );
};
