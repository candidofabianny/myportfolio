import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');

  return (
    <nav
      className={`w-full flex items-center py-6 fixed top-0 z-20 xxs:h-[12vh]`}>
     <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
     <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} 
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] mr-14 object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-yellow' : 'text-cherry'
              } hover:text-black text-[21px] font-medium font-lustria
              tracking-[2px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
