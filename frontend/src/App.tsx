import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingCollections from "./components/TrendingCollections";
import TopCreators from "./components/TopCreators";
import BrowseCategoriesSection from "./components/BrowseCategoriesSection";
import DiscoverNFTs from "./components/DiscoverNFTs";
import NFTDetails from "./pages/NFTDetails"; // 👈 create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <TrendingCollections />
              <TopCreators />
              <BrowseCategoriesSection />
              <DiscoverNFTs />
            </>
          }
        />
        <Route path="/nft/:id" element={<NFTDetails />} /> {/* 👈 new route */}
      </Routes>
    </Router>
  );
}

export default App;
