import React, { useRef, useLayoutEffect } from 'react';
import s from './Header.module.sass';
import Logo from '../Logo/Logo';
import { LanguageButton } from '../languageButton/LanguageButton';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import TopMenu from './TopMenu/TopMenu';
import { Link } from 'react-router-dom';
import YesAuthorization from './YesAuthorization/YesAuthorization';
import NoAuthorization from './NoAuthorization/NoAuthorization';
import { useSelector } from 'react-redux';
import { RootState } from '../../reduxToolkit/store';
import { BasicButton } from '../basicButton/BasicButton';

type HeaderProps = {
  children?: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const stickyHeader = useRef(null);
  const { t } = useTranslation();
  useLayoutEffect(() => {
    const header = document.getElementById('header');
    const fixedTop = stickyHeader.current.offsetTop;
    const stickyHeaderEvent = () => {
      if (window.scrollY > fixedTop) {
        header.classList.add(s.sticky_header);
      } else {
        header.classList.remove(s.sticky_header);
      }
    };
    window.addEventListener('scroll', stickyHeaderEvent);
  }, []);

  const isSingIn = useSelector<RootState, boolean>((state) => state.profile.isSingIn);
  const Account = isSingIn ? YesAuthorization : NoAuthorization;

  return (
    <div className={s.header} id="header" ref={stickyHeader}>
      <Logo />
      <TopMenu />
      <Account />
      <ThemeSwitcher />
      <LanguageButton />
      <div className={s.buttonsContainer}>
        <Link to="/cart">
          <BasicButton text={t`CartButtonTitle`} />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
