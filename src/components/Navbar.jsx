import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Download, Eye } from 'lucide-react'; // Lucide Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (path) => {
    if (path === '/') {
      if (location.pathname === '/') {
        scrollToTop();
      } else {
        navigate('/');
        setTimeout(() => scrollToTop(), 100);
      }
    } else if (path.startsWith('#')) {
      const sectionId = path.substring(1);
      if (location.pathname === '/') {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(path);
    }

    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Articles', path: '#articles' },
  ];

  return (
    <nav className="fixed top-4 w-full z-50 flex justify-center">
      <div className="max-w-6xl w-full mx-auto bg-white backdrop-blur-md rounded-md shadow-md px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="text-xl font-bold text-black hover:cursor-pointer"
          >
            Aasif Azlan
          </button>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) =>
              link.path.startsWith('#') || link.path === '/' ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-black hover:text-blue-400 cursor-pointer transition duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-black hover:text-blue-400 transition duration-300 ${
                      isActive ? 'underline' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Icons: Download + View Resume */}
          <div className="flex space-x-3 items-center ml-2">
            <a
              href="/resume.pdf"
              download
              title="Download Resume"
              className="text-black hover:text-blue-600 transition"
            >
              <Download className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="See Resume"
              className="text-black hover:text-blue-600 transition"
            >
              <Eye className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none ml-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-b-md shadow-inner py-2">
            {navLinks.map((link) =>
              link.path.startsWith('#') || link.path === '/' ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="block w-full text-left px-4 py-2 text-black hover:text-blue-400 transition duration-300"
                >
                  {link.name}
                </button>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 text-black hover:text-blue-400 transition duration-300 ${
                      isActive ? 'underline' : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
