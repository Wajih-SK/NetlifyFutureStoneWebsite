import React, { Component } from 'react';
import '../../App.css'
import {menuItems} from './MenuItems.js'
import './Navbar.css'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
            <nav className="navbar-container">
                <h1 className="navbar-logo">FUTURE</h1>

                <div className="navbar-menu-btn" onClick={this.handleClick}>
                    <br/>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {menuItems.map((item, index) => {
                            return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )})}
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;