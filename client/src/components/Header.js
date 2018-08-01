import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h3>Book Management Application</h3>
        <div>
          <ul className="list-unstyled">
            <li><NavLink to='/' exact={true}>Dashboard</NavLink></li>
            <li><NavLink to='/add' >Add Book</NavLink></li>
          </ul>
        </div>
    </header>
);

export default Header;