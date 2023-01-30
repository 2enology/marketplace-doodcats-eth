import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from "./component/Marketplace/Marketplace";
import AppHeader from "./component/Navbar";
import AppFooter from "./component/Footer";
import Banner from "./component/Banner";
import Mynft from "./component/Mynft";
import Sell from "./component/Sell";
import Buy from "./component/Buy";

import { AnimatePresence } from "framer-motion";

import "./App.css";
function App() {
  return (
    <AnimatePresence>
      <div
        className="bg-white dark:bg-blue-black duration-300 transition"
        style={{ minHeight: "1024px" }}>
        <Router>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Marketplace />} />
            <Route path="/" element={<Banner />} />
            <Route path="/mynft/:contractAddress" element={<Mynft />} />
            <Route
              path="/mynft/:type/:contractAddress/:nftid"
              element={<Sell />}
            />
            <Route path="/buy/:contractAddress/:nftid" element={<Buy />} />
          </Routes>
          <AppFooter />
        </Router>
        {/* <ScrollButton /> */}
      </div>
    </AnimatePresence>
  );
}

export default App;
