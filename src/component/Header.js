import React from "react";

const Header = () => {
  return (
    <div className="container-fluid bg-dark">
      <header className="d-flex justify-content-center py-3">
        <a className="navbar-brand" href="/">
          <h1 className="text-white">Catcyclopedia</h1>
        </a>
      </header>
    </div>
  );
};

export default Header;
