import React from 'react';
import Navbar from "./components/Navbar";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer";
import Listing from './components/Listing.js'
import SearchResult from './components/SearchResult'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './components/IndexPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/search_result/:converted_location/:startDate/:guests" element={<SearchResult />} />
          <Route path="/listing/:id" element={<Listing />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
