import React, { Component } from 'react';
import '../../../App.css'
import HeaderSection from './HeaderSection';
import InfoSection from './InfoSection';
import AboutSection from './AboutSection';

class Home extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <HeaderSection/>
                <InfoSection/>
                <AboutSection/>
            </React.Fragment>
         );
    }
}
 
export default Home;