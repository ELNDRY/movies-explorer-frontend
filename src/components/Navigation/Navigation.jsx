import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { DesktopMenu } from '../DesktopMenu/DesktopMenu';
import { useWindowSize } from '../../hooks/useWindowSize';
import '../Navigation/Navigation.css';

export const Navigation = ({ isMainPage }) => {
  const [isResolutionDesktop, setIsResoluyionDesktop] = useState(true);
  const windowSize = useWindowSize()

  useEffect(() => {
    setIsResoluyionDesktop(windowSize.width > 769);
  }, [windowSize]);

  return (
    <Header isMainPage={isMainPage}>
      <nav className="navigation">
        {!isResolutionDesktop && <BurgerMenu />}
        {isResolutionDesktop && <DesktopMenu isMainPage={isMainPage} />}
      </nav>
    </Header>
  );
};
