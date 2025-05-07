'use client'
import React from 'react';
import styles from "./header.module.scss"
import Link from 'next/link';
import { IoMdCall } from "react-icons/io";
import { MdDisplaySettings, MdManageAccounts, MdRecommend, MdClose } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import dynamic from 'next/dynamic';
const MediaQuery = dynamic(()=> import('react-responsive'), { ssr: false });
import Form from '@/containers/Form/Form';

type Props = {}

const Header = (props: Props) => {

  const [isOpenMblDrawer, setIsOpenMblDrawer] = React.useState(false);
  const [formDrawer, setFormDrawer] = React.useState(false);
  
  const togglediscussYourIdeaDrawer = () => {
    setFormDrawer(!formDrawer);
  };

  const toggleMblDrawer = () => {
    setIsOpenMblDrawer(!isOpenMblDrawer);
  };

  return (
    <>
    <header>
      <div className={styles.stickyHeader}>
        <div className={styles.container}>
          <div className={styles.logo}><span>7c</span>tech<span>.</span></div>

          <div className={styles.navAndContact}>
            <MediaQuery minWidth={1024}>
              <div className={styles.navigation}>
                <ul>
                  <li>
                    <Link className={styles.mainLink} href={'/'}>Services</Link>
                  </li>
                  <li>
                    <Link className={styles.mainLink} href={'/'}>Out Source</Link>
                  </li>
                  <li>
                    <Link className={styles.mainLink} href={'/'}>Case Studies <FaAngleDown className={styles.iconMargin} /></Link>
                    <div className={styles.linkMenu}>
                      <Link href={''}><MdDisplaySettings /> Agile negotiation</Link>
                      <Link href={''}><MdRecommend /> Product-Recommendations</Link>
                      <Link href={''}><MdManageAccounts /> Exhibition and Client Management</Link>
                    </div>
                  </li>
                  <li>
                    <Link className={styles.mainLink} href={'/'}>Blog</Link>
                  </li>
                  <li>
                    <Link className={styles.mainLink} href={'/'}>About Us</Link>
                  </li>
                </ul>
              </div>
            </MediaQuery>

            <div className={styles.contact}>
              <MediaQuery minWidth={1024}>
                <p><span><IoMdCall /></span> (323) 201-7046</p>
              </MediaQuery>

              <button onClick={togglediscussYourIdeaDrawer}>Get in Touch</button>

              <MediaQuery maxWidth={1023}>
                <div className={styles.hamBurger} onClick={toggleMblDrawer}><HiOutlineMenuAlt3 /></div>
              </MediaQuery>
            </div>
          </div>
        </div>
      </div>
    </header>


    <Drawer className={`${styles.drawerContainer} drawerContainer`} open={isOpenMblDrawer} onClose={toggleMblDrawer} anchor='right'>
      <div onClick={toggleMblDrawer} className={styles.closeBtnContainer}><MdClose /></div>
      <div className={styles.drawerLogo}><span>7c</span>tech<span>.</span></div>
      <div className={styles.navigation}>
        <ul>
          <li>
            <Link className={styles.mainLink} href={'/'}>Services</Link>
          </li>
          <li>
            <Link className={styles.mainLink} href={'/'}>Out Source</Link>
          </li>
          <li>
            <Accordion className={styles.accordion}>
              <AccordionSummary
                expandIcon={<FaAngleDown className={styles.iconMargin} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Link className={styles.mainLink} href={'/'}>Case Studies</Link>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <div className={styles.drawerLinkMenu}>
                  <Link href={''}><MdDisplaySettings /> Agile negotiation</Link>
                  <Link href={''}><MdRecommend /> Product-Recommendations</Link>
                  <Link href={''}><MdManageAccounts /> Exhibition and Client Management</Link>
                </div>
              </AccordionDetails>
            </Accordion>            
          </li>
          <li>
            <Link className={styles.mainLink} href={'/'}>Blog</Link>
          </li>
          <li>
            <Link className={styles.mainLink} href={'/'}>About Us</Link>
          </li>
        </ul>
      </div>
    </Drawer>

    <Form open={formDrawer} toggle={togglediscussYourIdeaDrawer} />
    </>
  )
}

export default Header