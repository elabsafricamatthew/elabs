import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import style from "./Header.module.css";

const Header = () => {
  const [showMobileNav, setshowMobileNav] = useState(false);
  const navLInks = [
    "home",
    "services",
    "projects",
    "about",
    "team",
    "clients",
    "contact us",
  ];

  const handleScrollToId = (id) => {
    let domId = id ? id.toLowerCase() : "";

    const dom = document.querySelector(`#${domId}`);

    if (dom) {
      setTimeout(() => {
        window.scrollTo({
          top: dom.offsetTop - 20,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <header
      className={`${style.container} ${
        showMobileNav ? style.activeMobileNav : null
      }`}
    >
      <div className={style.headerContent}>
        <img src="/assets/svgImgs/logo.svg" alt="logo" />
        <nav>
          <ul>
            {navLInks.map((link) => (
              <li key={link}>
                <a
                  onClick={() => {
                    setshowMobileNav(false);
                    handleScrollToId(
                      link.includes("contact") ? "contact" : link
                    );
                  }}
                  href={link.includes("contact") ? "#contact" : `#${link}`}
                  className={link.includes("home") ? style.active : null}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          aria-label="menu button"
          onClick={() => setshowMobileNav((prevState) => !prevState)}
        >
          <RxHamburgerMenu color="#FF781F" />
        </button>
      </div>
    </header>
  );
};

export default Header;
