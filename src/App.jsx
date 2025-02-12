  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Office from "./pages/Office";
  import Navbar from "./components/Navbar";
  import Home from "./components/Home";
  import About from "./components/About";
  import Service from "./components/Service";
  import FixedBG from "./components/FixedBG";
  import Expertise from "./components/Expertise";
  import Project from "./components/Project";
  import Footer from "./components/Footer";
  import FixedFooter from "./components/FixedFooter";
  import InfiniteScroll from "./components/InfiniteScroll";
  import Residential from "./pages/Residential";
  import Booth from "./pages/Booth";
  import Furniture from "./pages/Furniture";
  import BGOnly from "./components/BGOnly";

  function App() {
    return (
      <div className="overflow-hidden">
        <Router>
          <Routes>
            {/* Rute untuk halaman utama */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Home />
                  <div className="flex justify-center items-center w-screen flex-col">
                    <InfiniteScroll />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <Service />
                  <BGOnly img="img/bgfixed1.jpg" />
                  <Expertise />
                  <FixedBG img="img/bgfixed.jpeg" />
                  <Project />
                  <FixedFooter img="img/footer2.png" />
                  <Footer />
                </>
              }
            />
            {/* Rute untuk halaman portfolio */}
            <Route path="/office" element={<Office />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/booth" element={<Booth />} />
            <Route path="/furniture" element={<Furniture />} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;
