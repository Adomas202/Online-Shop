import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="">Online Shop</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;