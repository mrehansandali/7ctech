import React from 'react';
import styles from "./footer.module.scss";
import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <div>
              <p className={styles.heading}>Company</p>
              <Link href={'/'}>About Us</Link>
              <Link href={'/'}>Contact Us</Link>
              <Link href={'/'}>Blog</Link>
              <Link href={'/'}>Out Source</Link>
            </div>
            <div>
              <p className={styles.heading}>Contact</p>
              <Link href={'/'}>(323) 201-7046</Link>
              <Link href={'/'}>+92-342-2686008</Link>
              <Link href={'/'}>info@7ctech.com</Link>
            </div>
            <div>
              <p className={styles.heading}>Location</p>
              <div className={styles.location}>
                <p className={styles.locationHeading}><IoLocationSharp /> United States</p>
                <p>7 MILL RD, FARMINGDALE, NY, 11735</p>
              </div>
              <div className={styles.location}>
                <p className={styles.locationHeading}><IoLocationSharp /> Pakistan</p>
                <p>252D, Shahrah-e-Faisal, Block 6 PECHS, Karachi, Pakistan</p>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.itemOne}>
              <div className={styles.logo}><span>7c</span>tech<span>.</span></div>
              <p>© 2025 7ctech. All Rights Reserved</p>
            </div>
            <div className={styles.itemTwo}>
              <Link href={'/'}><FaLinkedinIn /></Link>
              <Link href={'/'}><FaXTwitter /></Link>
              <Link href={'/'}><FaFacebookF /></Link>
            </div>            
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer