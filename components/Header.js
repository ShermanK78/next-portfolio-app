import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Links for different pages */}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>

        {/* Inline CSS styling using styled-jsx */}
        <style jsx>{`
          header {
            background-color: #333;
            color: white;
            padding: 10px;
          }
          nav {
            display: flex;
            justify-content: space-around;
          }
          a {
            color: white;
            text-decoration: none;
          }
        `}</style>
      </nav>
    </header>
  );
};

export default Header;
