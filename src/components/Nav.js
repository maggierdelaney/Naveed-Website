import React from 'react';
import './pages/style.css';

function Nav({ currentPage, handlePageChange }) {
    return (
        <div id="behind-nav">
            <ul id="nav-flex" className="nav justify-content-center">
                <li className="nav-item">
                    <a 
                        className={`nav-link playfair-display-sc-regular ${currentPage === 'Home' ? 'active' : ''}`}
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link playfair-display-sc-regular ${currentPage === 'Registry' ? 'active' : ''}`}
                        href="#registry"
                        onClick={() => handlePageChange('Registry')}
                    >
                        Registry
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        className={`nav-link playfair-display-sc-regular ${currentPage === 'Travel' ? 'active' : ''}`}
                        href="#travel"
                        onClick={() => handlePageChange('Travel')}
                    >
                        Travel & Stay
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;
