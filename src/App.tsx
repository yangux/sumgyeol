import { Route, Routes } from "react-router-dom";
import './styles/style.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Introduce from "./pages/Introduce"
import Work from "./pages/Work";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/introduce" element={<Introduce/>}></Route>
      <Route path="/work" element={<Work />}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
    </Routes>
  </>
  )
}

export default App;
