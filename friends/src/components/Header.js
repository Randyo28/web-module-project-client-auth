import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='headerDiv'>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/protected'>Friends</Link>
            </ul>
        </div>
    );
}

export default Header;