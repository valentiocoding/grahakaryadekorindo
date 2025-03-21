import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedFooter from "./components/FixedFooter";
// import ScrollToTop from "./components/ScrollToTop"; // Tambahkan helper untuk scroll ke atas otomatis
import BGOnly from "./components/BGOnly";
import FixedBG from "./components/FixedBG";
import bgfixed1 from "../src/assets/img/bgfixed1.webp";
import bgfixed from "../src/assets/img/office.webp";
import footer2 from "../src/assets/img/footer2.webp";

// Lazy Load untuk meningkatkan performa
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Service = lazy(() => import("./components/Service"));
const Expertise = lazy(() => import("./components/Expertise"));
const Project = lazy(() => import("./components/Project"));
const InfiniteScroll = lazy(() => import("./components/InfiniteScroll"));
const Office = lazy(() => import("./pages/Office"));
const Residential = lazy(() => import("./pages/Residential"));
const Booth = lazy(() => import("./pages/Booth"));
const Furniture = lazy(() => import("./pages/Furniture"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Routes>
          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <div className="overflow-hidden">
                <Navbar />
                <Home />
                <div className=" m-4  font-semibold font-raleway text-center">
                  Expert Contractor for:
                </div>
                <div className="flex justify-center items-center w-screen flex-col">
                  <InfiniteScroll />
                </div>
                <About />
                <Service />
                <BGOnly img={bgfixed1} />
                <Expertise />
                <FixedBG img={bgfixed} />
                <Project />
                <FixedFooter img={footer2} />
                <Footer />
              </div>
            }
          />
          {/* Halaman Portfolio */}
          <Route path="/office" element={<Office />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/booth" element={<Booth />} />
          <Route path="/furniture" element={<Furniture />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
