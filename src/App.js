import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  useEffect(() => {
    document.title = 'MeTube'; // To change the title
  });

  return (
    <div className="app">
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path="/" element={
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          }>
          </Route>

          <Route path="/search/:searchTerm" element={
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          }>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
