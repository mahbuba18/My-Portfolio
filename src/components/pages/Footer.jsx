import React from 'react';

const Footer = () => {
    return (
       <footer className="p-4 bg-white text-black text-center space-y-2">
  <p
    style={{ fontFamily: '"Berkshire Swash", serif', fontWeight: 400 }}
    className="text-xl font-bold text-black"
  >
    Thank you for visiting my portfolio!!
  </p>
  <aside className="m-0 p-0">
    <p className="text-sm m-0">
      Copyright © {new Date().getFullYear()}
      <strong> Mahabuba Islam Priya</strong>. All rights reserved.
    </p>
  </aside>
</footer>

    );
};

export default Footer;