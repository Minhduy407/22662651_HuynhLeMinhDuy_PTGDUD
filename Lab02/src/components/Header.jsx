import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/chefify.png";
import archiveIcon from "../images/archive_check.png";
import avatar from "../images/avatar.png";

export default function Header() {
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        fetch("https://67cd344edd7651e464ed9fce.mockapi.io/api/v1/d/navItems")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNavItems(data);
            })
    }, []);

    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="header-logo">
                    <img src={logo} alt="Chefify Logo" />
                </div>

                {/* Search Bar */}
                <div className="header-search">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for recipes..." />
                </div>

                {/* Navigation */}
                <nav className="header-nav">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </nav>

                {/* Recipe Box & Profile */}
                <div className="header-right">
                    <button className="recipe-box-btn">
                        <img src={archiveIcon} alt="Recipe Box Icon" />
                        Your Recipe Box
                    </button>
                    <img src={avatar} className="profile-img" alt="User Avatar" />
                </div>
            </div>
        </header>
    );
}
