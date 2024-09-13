import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Work from "./Pages/Work/Work";
import WorkDetail from "./Pages/WorkDetail/WorkDetail";
import Contact from "./Pages/Contact/Contact"
import Footer from "./Components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="work" element={<Work />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="workdetail/:id" element={<WorkDetail />} 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;