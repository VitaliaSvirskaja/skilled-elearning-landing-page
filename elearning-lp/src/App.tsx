import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";

export const App = () => (
  <div className="-z-10 bg-gradient-to-b from-white to-gradient-background-blue sm:relative">
    <div className="mx-auto max-w-screen-2xl overflow-hidden">
      <Navbar />
      <MainContent />
    </div>
    <Footer />
  </div>
);
