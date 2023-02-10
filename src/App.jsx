import { Routes, Route } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import { Start } from "./pages/Start";
import { Questions } from "./pages/Questions";
import { Result } from "./pages/Result";
import { Navbar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";

export function App() {
  return (
    <div className=" bg-green-teal flex flex-col h-screen ">
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Questions" element={<Questions />} />
          <Route path="/Start" element={<Start />} />
          <Route path="/Result" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
