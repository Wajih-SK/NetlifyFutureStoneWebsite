import React, { Component } from 'react';
import InfoSectionItem from './InfoSectionItem';
import './InfoSection.css'
import { Information } from './InfoText';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.selectorRef = React.createRef(null);
     }
    
      componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        var scroll = window.scrollY; 

        var bottom = this.selectorRef.current.getBoundingClientRect().bottom; 
        var top = this.selectorRef.current.getBoundingClientRect().top; 
        var height = this.selectorRef.current.getBoundingClientRect().height;
        if(scroll > top && scroll < bottom+height){
          document.querySelector(".info-items").classList.add('scroll-on');  
        } 
      }
    render() { 
        return ( 
            <div className="info-container" ref={this.selectorRef}>
                <div className="info-wrapper" >
                    <ul className="info-items">
                        <InfoSectionItem
                        class={"info-image-1"}
                        text={Information[0]}
                        label='Stones Bright the Future!'
                        />

                        <InfoSectionItem
                        class={"info-image-2"}
                        text={Information[1]}
                        label='Application Areas'
                        />

                        <InfoSectionItem
                        class={"info-image-3"}
                        text={Information[2]}
                        label='Safety & Guiding'
                        />

                    </ul>
                </div>
            </div>
         );
    }
}
 
export default InfoSection;