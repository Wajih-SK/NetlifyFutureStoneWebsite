import React, { Component } from 'react';
import '../../../App.css'
import './Contact.css'
import emailjs from '@emailjs/browser';


class Contact extends Component {
    state = {sent: null}


    handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bvp4n4z', 'template_wdy4avi', e.target, 'user_uvgsa71J2G0xpqQXEq23S')
          .then((result) => {
              console.log(result.text);
              document.querySelector(".conformation").classList.add('sent');  
              this.setState({sent: true})
          }, (error) => {
              console.log(error.text);
              document.querySelector(".conformation").classList.add('failed');  
              this.setState({sent: false})
          });
          e.target.reset()
    }
    render() { 
        return (
            <div className="contact-container">
                <div className="contact-title">Say Hello!</div>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit} className="contact-form">
                        <div className="contact-info-section">
                            <div className="info-contact-title">Fullname:</div>
                            <input className="contact-input" type='text' name='fullName' required></input>
                            <div className="info-contact-title">Email:</div>
                            <input className="contact-input" type='text' name='email' required></input>
                            <div className="info-contact-title">Phone Number:</div>
                            <input className="contact-input" type='text' name='number'></input>
                        </div>
                        <div className="message-section">
                            <div className='message-box-wrapper'>
                                <div className="message-title">Message</div>
                                <textarea className="message-input" type='text' name='message' required></textarea>
                            </div>
                            
                            <button className="submit-btn">Submit</button>
                        </div>
                        
                    </form>
                </div>
                <div className="conformation">{this.state.sent ? "Message was sent successfully" : this.state.sent == null ? "" : "Failed to send message"}</div>
            </div>
        );
    }
}
 
export default Contact;