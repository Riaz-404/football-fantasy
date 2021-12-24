import React from 'react';
import header from '../../images/premier-league-vector-logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="header">
                <img src={header} alt="" />
                <h1 className="header-tagline">Fantasy Premier League</h1>
            </div>

            <div className="navigation-bar">
                <nav>
                    <a href="/team">Team</a>
                    <a href="/video">Videos</a>
                    <a href="/communities">Communities</a>
                    <a id="racism" href="/racism">No Room For Racism</a>
                </nav>
            </div>
        </div>

    );
};

export default Header;