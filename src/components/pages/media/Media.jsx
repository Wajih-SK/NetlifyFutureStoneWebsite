import React, { Component } from 'react';
import '../../../App.css'
// import { NewsImages } from './NewsImages';
import './Media.css';


class Media extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="media-container">
                <div className="media-wrapper">
                    <div className="news">
                        <div className="image-wrapper news-image1"></div>
                        <div className="image-wrapper news-image2"></div>
                        <div className="image-wrapper news-image3"></div>
                    </div>
                    <div className="news">
                        <div className="image-wrapper news-image4"></div>
                        <div className="image-wrapper news-image5"></div>
                        <div className="image-wrapper news-image6"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Media;