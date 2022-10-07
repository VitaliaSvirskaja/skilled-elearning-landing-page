import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="App bg-gradient-to-b from-white to-gradient-background-blue">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
