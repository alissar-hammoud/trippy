import { useState } from 'react';
import './Navbar.css';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { FaToolbox, FaAddressBook, FaBars } from 'react-icons/fa6';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <h3>Trippy</h3>
      <div className="nav-items">
        <ul>
          <li>
            <AiFillHome />
            Home
          </li>
          <li>
            <AiFillInfoCircle />
            About
          </li>
          <li>
            <FaToolbox />
            Service
          </li>
          <li>
            <FaAddressBook />
            Contact
          </li>
        </ul>
        <button className="btn-signup">Sign Up</button>
      </div>
      <FaBars className="nav-btn" onClick={() => setOpen((prev) => !prev)} />
      <div className={'nav-menu' + (open ? '' : ' hidden')}>
        <ul>
          <li>
            <AiFillHome />
            Home
          </li>
          <li>
            <AiFillInfoCircle />
            About
          </li>
          <li>
            <FaToolbox />
            Service
          </li>
          <li>
            <FaAddressBook />
            Contact
          </li>
        </ul>
        <button className="btn-signup">Sign Up</button>
      </div>
    </nav>
  );
}
