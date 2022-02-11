import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="header">
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </div>
    );
};

export default Header;