import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingCollections from "./components/TrendingCollections";
import TopCreators from "./components/TopCreators";
import BrowseCategoriesSection from "./components/BrowseCategoriesSection";
import DiscoverNFTs from "./components/DiscoverNFTs";
import NFTDetails from "./pages/NFTDetails"; 
import NextSection from "./components/NextSection"; 
import HowItWorks from "./components/HowItWorks";
import NewsletterCard from "./components/NewsletterCard";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup Page";   // ✅ Add this

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Homepage */}
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
              <NextSection /> 
              <HowItWorks />
              <NewsletterCard />
              <Footer />
            </>
          }
        />

        {/* 🔐 Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 🆕 SignUp Page */}
        <Route path="/signup" element={<SignUp />} />   {/* ✅ Added */}

        {/* 🎨 NFT Details Page */}
        <Route path="/nft/:id" element={<NFTDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
