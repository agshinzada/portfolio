import React from "react";

const NavLinkItem = ({ name, url, handleBurger }) => {
  return (
    <a href={url} className="font-bold text-sm" onClick={handleBurger}>
      {name}
    </a>
  );
};

export default NavLinkItem;
