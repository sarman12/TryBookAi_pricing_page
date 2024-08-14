import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="#overview">OVERVIEW</a></li>
        <li><a href="#authentication">AUTHENTICATION</a></li>
        <li><a href="#endpoints">ENDPOINTS</a></li>
        <li><a href="#tutorial">TUTORIAL</a></li>
        <li><a href="#code-examples">CODE EXAMPLES</a></li>
        <li><a href="#pricing">PRICING</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
