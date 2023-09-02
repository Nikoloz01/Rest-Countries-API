import Nav from "./components/Nav";
import Home from "./pages/Home";
import FullCountry from "./pages/FullCountry";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import useDarkSide from "./Hook/useDarkSide";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const App: React.FC = () => {
  const [darkSide, toggleTheme] = useDarkSide();

  const handleDarkModeClick = () => {
    if (typeof toggleTheme === "function") {
      toggleTheme();
    }
  };

  return (
    <Router>
      <div className="flex justify-center w-full ">
      <div className={`  wrapper`}>
        <div className="flex justify-between pt-3 pb-3 border-b-2 border-gray-200 shadow-mditems-center dark:bg-gray-800 dark:border-none pl-14 pr-14 navWrapper">
          <Nav />
          <button onClick={handleDarkModeClick} className="flex items-center gap-3">
            {darkSide ? <MdDarkMode /> : <MdOutlineDarkMode />}
            <span className="text-lg font-semibold">Dark Mode</span>
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<FullCountry />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
};

export default App;
