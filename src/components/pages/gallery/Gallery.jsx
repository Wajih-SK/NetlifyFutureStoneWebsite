import React, { Component } from 'react';
import '../../../App.css';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData } from './SliderData';
import './Gallery.css'

class Gallery extends Component {
    state = { current: 0 }
    handleLeftArrow = () => {
        this.setState({current: this.state.current === SliderData.length - 1 ? 0 : this.state.current + 1});
    };

    handleRightArrow = () => {
        this.setState({current: this.state.current === 0 ? SliderData.length - 1 : this.state.current - 1});
    };

    handleImageSelect = (index) => {
        this.setState({current: index});
        window.scrollTo(0, 0);
    };

    render() { 
        return (
            <React.Fragment>
                <div className="image-slider-container">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={this.handleLeftArrow}></FaArrowAltCircleLeft>
                        <FaArrowAltCircleRight className="right-arrow" onClick={this.handleRightArrow}></FaArrowAltCircleRight>
                    <div className="image-slider-wrapper">
                        
                        {SliderData.map((slide, index) => {
                            return (
                            <div
                                className={index === this.state.current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === this.state.current && (
                                <img src={slide} alt='travel' className='image' />
                                )}
                            </div>
                            );
                        })}
                        
                    </div>
                </div>
                <div className="image-list-container">
                    <div className="image-list-wrapper">

                        {SliderData.map((slide, index) => {
                                
                                return (
                                <div
                                    className={"listed-image-wrapper"}
                                    key={index}
                                    onClick={() => {this.handleImageSelect(index)}}
                                >
                                    <img src={slide} alt='travel' className='listed-image' /> 
                                </div>
                                );
                            })}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Gallery;