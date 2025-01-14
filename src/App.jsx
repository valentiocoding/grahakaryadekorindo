// import { motion } from "framer-motion";
// import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      {/* <Maintenance /> */}
      <Navbar />
      <Home />
      <About />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}

export default App;
