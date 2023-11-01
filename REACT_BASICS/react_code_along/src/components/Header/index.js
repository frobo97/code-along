import { useState } from "react";
import Container from "../UI-components/Container";
import Logo from "./Logo";
import Nav from "./Nav";
import SigningIn from "./SigningIn";
import HamburgerMenu from "./HamburgerMenu";

import styles from "./index.module.css";

import hamburger from "../../images/hamburger-menu.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isTablet = useMediaQuery("(min-width: 648px)");

  const handleClick = () => {
    setIsOpen((previousState) => !previousState);
  };
  return (
    <Container>
      <section className={styles.headerWrapper}>
        <article className={styles.logoNavWrapper}>
          <Logo />
          {isTablet && <Nav />}
        </article>
        {isTablet && <SigningIn />}
        {!isTablet && (
          <img onClick={handleClick} alt="hamburger-menu" src={hamburger} />
        )}
        {isOpen && <HamburgerMenu />}
      </section>
    </Container>
  );
};

export default Header;
