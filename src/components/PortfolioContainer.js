import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Testimonials from './pages/Testimonials';
import Media from './pages/Media';
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
    if (currentPage === 'Services') {
      return <Services />;
    }
    if (currentPage === 'Schedule') {
        return <Schedule />;
      }
    if (currentPage === 'Testimonials') {
        return <Testimonials />;
    }
    if (currentPage === 'Media') {
        return <Media />;
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