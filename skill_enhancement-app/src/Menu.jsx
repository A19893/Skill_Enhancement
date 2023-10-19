import React from 'react';

function MenuItem({ label, onClick }) {
    console.log("MenuItem hiited")
  return <li onClick={onClick}>{label}</li>;
}

function SubMenu({ label, children }) {
    console.log("SubMenu Hitted")
  return (
    <li>
      {label}
      <ul>{children}</ul>
    </li>
  );
}

function Menu() {
    console.log("Hitted")
  const handleMenuClick = (e) => {
    console.log(e)
    // && e.target.closest('ul') === e.currentTarget
    if (e.target.tagName === 'LI' ) {
      alert(`Clicked: ${e.target.textContent}`);
    }
  };

  return (
    <ul onClickCapture={handleMenuClick}>
      <MenuItem label="Home" />
      <SubMenu label="Products">
        <MenuItem label="Laptops" />
        <MenuItem label="Smartphones" />
      <SubMenu label="Accessories">
          <MenuItem label="Headphones" />
          <MenuItem label="Cases" />
        </SubMenu>
      </SubMenu>
    </ul>
  );
}

export default Menu;