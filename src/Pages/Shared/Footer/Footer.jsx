import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center mt-5">
      <p>
        <small>Copywrite © {year} Al Mamun Khan</small>
        {/* <small>Copywrite © {new Date().getFullYear()} Al Mamun Khan</small> */}
      </p>
    </footer>
  );
};

export default Footer;
