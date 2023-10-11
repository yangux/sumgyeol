import { Route, Routes } from "react-router-dom";
import "./styles/style.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Introduce from "./pages/Introduce";
import Work from "./pages/Work";
import Experience from "./pages/Experience";
import DetailIntroduce1 from "./pages/DetailIntroduce1";
import DetailIntroduce2 from "./pages/DetailIntroduce2";
import DetailIntroduce3 from "./pages/DetailIntroduce3";
import React, { useEffect } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/introduce" element={<Introduce />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route
          path="/introduce/detailIntroduce1"
          element={<DetailIntroduce1 />}
        ></Route>
        <Route
          path="/introduce/detailIntroduce2"
          element={<DetailIntroduce2 />}
        ></Route>
        <Route
          path="/introduce/detailIntroduce3"
          element={<DetailIntroduce3 />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
