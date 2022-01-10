import React, { Component } from 'react';
import AboutSectionItem from './AboutSectionItem';
import AboutImage1 from '../../../assets/images/about-image-1.png'
import AboutImage2 from '../../../assets/images/about-image-2.png'
import AboutImage3 from '../../../assets/images/about-image-3.png'
import { AboutSectionItemText } from './AboutSectionItemText';
import './AboutSection.css'

class AboutSection extends Component {
    render() { 
        return ( 
            <div className="about-container">
                <h5 className="about-title">About Us</h5>
                <div className="about-wrapper">
                    <ul className="about-items">
                    <AboutSectionItem src={AboutImage1} text={AboutSectionItemText[0]} title="New Ideas"/>
                    <AboutSectionItem src={AboutImage2} text={AboutSectionItemText[1]} title="New Areas"/>
                    <AboutSectionItem src={AboutImage3} text={AboutSectionItemText[2]} title="Turn Dreams"/>
                    </ul>
                </div>

            </div>

        );
    }
}
 
export default AboutSection;