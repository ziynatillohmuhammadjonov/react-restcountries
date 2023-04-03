// style
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="flex flex-col  bg-slate-100 h-screen ">
        <Navbar />
        <div className=" grow   bg-slate-100 dark:bg-slate-700 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about/:code" element={<About />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
