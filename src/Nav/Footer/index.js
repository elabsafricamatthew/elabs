import React from 'react'
import Link from 'next/link';
import { RiFacebookFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { FooterLogo } from '../../../public/assets/svgImgs';
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.footerContent}>
        <div className={style.footerLogoWrapper}>
          <img src="assets/svgImgs/footerLogo.svg" alt="footer logo" />
        </div>
        <div>
          <label className={style.footerLabel}>Company</label>
          <div className={style.companyLinksWrapper}>
            <div className={style.linksContainer}>
              <Link href="/">home</Link>
              <Link href="/">project</Link>
              <Link href="/">services</Link>
              <Link href="/">about us</Link>
            </div>
            <div className={style.linksContainer}>
              <Link href="/">team</Link>
              <Link href="/">clients</Link>
              <Link href="/">contact us</Link>
            </div>
          </div>
        </div>
        <div className={style.socialMediaWrapper}>
          <label className={style.footerLabel}>Social media</label>
          <div className={style.socialIconsWrapper}>
            <Link href="/">
              <RiFacebookFill />
            </Link>
            <Link href="/">
              <RxInstagramLogo />
            </Link>
          </div>
          <p className={style.copyrightText}>
            Copyright Elabsafrica 2023 in Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer