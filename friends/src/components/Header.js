import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div className='headerDiv'>
            <ul>
                <NavLink to='/home' activeStyle={{
                    fontWeight: "bold",
                    color: "#1098F7"
                    }}>Home</NavLink>
                <NavLink to='/login' activeStyle={{
                    fontWeight: "bold",
                    color: "#1098F7"
                    }}>Login</NavLink>
                <NavLink to='/protected' activeStyle={{
                    fontWeight: "bold",
                    color: "#1098F7"
                    }}>Friends</NavLink>
                <NavLink to='/newFriend' activeStyle={{
                    fontWeight: "bold",
                    color: "#1098F7"
                    }}>NewFriend</NavLink>
            </ul>
        </div>
    );
}

export default Header;