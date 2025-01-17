// import { motion } from "framer-motion";
import Maintenance from "./components/Maintenance";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import FixedBG from "./components/FixedBG";
import Expertise from "./components/Expertise";
import Project from "./components/Project";
import Footer from "./components/Footer";
import FixedFooter from "./components/FixedFooter";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Service />
        <FixedBG img="img/bgfixed1.jpg" />
        <Expertise />
        <FixedBG img="img/bgfixed.jpeg" />
        <Project />
        <FixedFooter img="img/footer2.png" />
        <Footer />
      </div>
    </>
  );
}

export default App;
