import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu';
import '../Navigation/Navigation.css';

export const Navigation = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsBurgerOpen(true);
  };

  const handleBurgerClose = () => {
    setIsBurgerOpen(false);
  }

  let type = isBurgerOpen ? 'in' : 'out';

  const sideBarClassName = (`navigation__sidebar navigation__sidebar_${type}`)

  return (
    <Header>
      <nav className="navigation">
        <button
          onClick={handleBurgerOpen}
          className="navigation__burger"
        ></button>
        {isBurgerOpen && <div className="navigation__overlay" />}
        <div className={sideBarClassName}>
          <button
            className="burger__close-button"
            onClick={handleBurgerClose}
          ></button>
          <BurgerMenu />
        </div>
        <DesktopMenu />
      </nav>
    </Header>
  );
};