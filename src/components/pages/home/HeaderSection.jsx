import React, { Component } from 'react';
import './HeaderSection.css'
import { Link } from 'react-router-dom';

class HeaderSection extends Component {
    render() { 
        return (
            <div className="header-section">
                <h1>FUTURE <span>STONE</span></h1>
                <p>Let our designers shed light on your situation!</p>

                <div className="btn-wrapper">
                    <Link to='/contact-us' className="header-btn-link">
                        <button className="header-button">Contact Us</button>
                    </Link>
                    
                </div>
                
            </div>
         );
    }
}
 
export default HeaderSection;