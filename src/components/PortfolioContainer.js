import React, { useState } from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import PhysicalTherapy from './pages/PhysicalTherapy';
import Testimonials from './pages/Testimonials';
import About from './pages/About';

import './pages/style.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    if (currentPage === 'PhysicalTherapy') {
      return <PhysicalTherapy />;
    }
    if (currentPage === 'Testimonials') {
        return <Testimonials />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}