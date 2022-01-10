import React, { Component } from 'react';
import '../../App.css'
import './Footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer-container">
                <div className="footer-head">
                    <div className="footer-section">
                        <h1 className="footer-title">info@future-stone.com</h1>
                        <h5 className="footer-text">We love our customers, so feel free to contact us.</h5>
                    </div>

                    <div className="footer-section">
                        <h1 className="footer-title">FUTURE Leed LTD.</h1>
                        <h5 className="footer-text">Waterloo, Ontario, CANADA</h5>
                        <h5 className="footer-text">canada@future-stone.com</h5>
                        <h5 className="footer-text">001-519-498-7915</h5>
                    </div>

                    <div className="footer-section">
                        <h1 className="footer-title">WEBS Electronics Treading LLC</h1>
                        <h5 className="footer-text">Dubai, United Arab Emirates </h5>
                        <h5 className="footer-text">dubai@future-stone.com</h5>
                        <h5 className="footer-text">00971-52-5480050</h5>
                    </div>

                </div>
                <section className="footer-bottom">
                    <div className="bottom-wrapper">
                        <h4 className="footer-rights">COPYRIGHT © 2016 2020 FUTURE STONE LIGHTING - ALL RIGHTS RESERVED.</h4>
                    </div>
                </section>

            </div>
         );
    }
}
 
export default Footer;