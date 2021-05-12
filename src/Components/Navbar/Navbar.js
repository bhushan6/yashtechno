import React from 'react'
import "./Navbar.scss"

import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className = "navbar">
            <div className="logo">
                <h1>Mployee</h1>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Dashboard</li>
                    <li className="active">Relocate</li>
                    <li>Directory</li>
                    <li>Projects</li>
                    <li>Technology</li>
                </ul>
            </div>
            <div className="search-bar">
                <input type="text" name="" id="" placeholder="Search"/>
                <button>
                    <FaSearch/>
                </button>
            </div>
            <div className="avtar">
                <p>AT</p>
            </div>
        </div>
    )
}

export default Navbar
