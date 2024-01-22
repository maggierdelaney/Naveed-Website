import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <div id="behind-nav" >
        <ul id="nav-flex" className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#home"
              onClick={() => handlePageChange('Home')}
              className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#services" onClick={() => handlePageChange('Services')}
              className={currentPage === 'Services' ? 'nav-link active' : 'nav-link'}>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#schedule" onClick={() => handlePageChange('Schedule')}
              className={currentPage === 'Schedule' ? 'nav-link active' : 'nav-link'}>Schedule</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#testimonials" onClick={() => handlePageChange('Testimonials')}
              className={currentPage === 'Testimonials' ? 'nav-link active' : 'nav-link'}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#blog" onClick={() => handlePageChange('Blog')}
              className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#media" onClick={() => handlePageChange('Media')}
              className={currentPage === 'Media' ? 'nav-link active' : 'nav-link'}>Media</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#about" onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="https://www.instagram.com/nshan87/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
        </ul>
      </div>
    );
}

export default Nav;