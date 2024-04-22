import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import img1 from "../asset/Logo.png"
import './NavbarStyle.css';

class Navbar extends Component {
    state = { clicked: false };
        handleclick = () => {
            this.setState({ clicked: !this.state.clicked });
        }
    render() {
        return (
            <nav className='NavbarItems'>
                <img className='navbar-logo' alt='Logo' src={img1}/>
                <div className='menu-icons' onClick={this.handleclick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.className} to={item.url}><i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar
