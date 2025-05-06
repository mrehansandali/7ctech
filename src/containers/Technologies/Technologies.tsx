'use client'
import React, { useState } from 'react';
import styles from "./Technologies.module.scss";
import { FaAngular, FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaMagento, FaNode, FaPhp, FaPython, FaReact, FaSass, FaShopify, FaSwift, FaWordpress } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiBigcommerce, SiDjango, SiDotnet, SiMongodb, SiMui, SiPostgresql, SiShadcnui, SiSwiper } from "react-icons/si";
import { DiJavascript1, DiMsqlServer, DiMysql, DiRedis } from "react-icons/di";
import { FaDrupal, FaFlutter, FaVuejs } from 'react-icons/fa6';
import { TbBrandCSharp, TbBrandReactNative, TbBrandTypescript } from 'react-icons/tb';
import { GrOracle } from 'react-icons/gr';

type Props = {}

const Technologies = (props: Props) => {
  const [tabContent, setTabContent] = useState('frontend')
  return (
    <>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Technologies we use</h2>
            <p>Our pool of 350+ technology specialists—across web, mobile, and software development—brings the expertise and scalability your projects demand, backed by the latest tools and frameworks.</p>
          </div>
          <div className={styles.tabSection}>
            <div className={styles.tabs}>
              <ul>
                <li className={tabContent == 'frontend' ? styles.active : ""} onClick={() => setTabContent("frontend")}>Frontend</li>
                <li className={tabContent == 'backend' ? styles.active : ""} onClick={() => setTabContent("backend")}>Backend</li>
                <li className={tabContent == 'database' ? styles.active : ""} onClick={() => setTabContent("database")}>Database</li>
                <li style={{minWidth: '110px'}} className={tabContent == 'mblApps' ? styles.active : ""} onClick={() => setTabContent("mblApps")}>Mobile Apps</li>
                <li className={tabContent == 'cms' ? styles.active : ""} onClick={() => setTabContent("cms")}>CMS</li>
              </ul>
            </div>
            <div className={styles.tabContent}>
              {tabContent === 'frontend' ?
                <div className={styles.content}>
                    <div><FaReact /><p>React.js</p></div>
                    <div><RiNextjsLine /><p>Next.js</p></div>
                    <div><FaAngular /><p>Angular.js</p></div>
                    <div><FaVuejs /><p>Vue.js</p></div>
                    <div><DiJavascript1 /><p>JavaScript</p></div>
                    <div><TbBrandTypescript /><p>TypeScript</p></div>
                    <div><FaHtml5 /><p>Html5</p></div>
                    <div><FaCss3 /><p>CSS3</p></div>
                    <div><FaSass /><p>Sass</p></div>
                    <div><SiSwiper /><p>Swiper</p></div>
                    <div><SiMui /><p>Material UI</p></div>
                    <div><FaBootstrap /><p>BootStrap</p></div>
                    <div><SiShadcnui /><p>Shadcn UI</p></div>
                </div>
              : ""}

              {tabContent === 'backend' ?
                <div className={styles.content}>
                  <div><SiDotnet /><p>.NET</p></div>
                  <div><TbBrandCSharp /><p>CSharp</p></div>
                  <div><FaNode /><p>Node.js</p></div>
                  <div><FaPhp /><p>PHP</p></div>
                  <div><FaLaravel /><p>Laravel</p></div>
                  <div><FaPython /><p>Python</p></div>
                  <div><SiDjango /><p>Django</p></div>
                </div>
              : ""}
              
              {tabContent === 'database' ?
                <div className={styles.content}>
                  <div><SiMongodb /><p>MongoDB</p></div>
                  <div><DiMysql /><p>MySQL</p></div>
                  <div><DiMsqlServer /><p>MsSQL</p></div>
                  <div><SiPostgresql /><p>PostgreSQL</p></div>
                  <div><DiRedis /><p>Redis</p></div>
                </div>
              : ""}

              {tabContent === 'mblApps' ?
                <div className={styles.content}>
                  <div><TbBrandReactNative /><p>React Native</p></div>
                  <div><FaFlutter /><p>Flutter</p></div>
                  <div><FaSwift /><p>Swift</p></div>
                </div>
              : ""}

              {tabContent === 'cms' ?
                <div className={styles.content}>
                  <div><FaWordpress /><p>Wordpress</p></div>
                  <div><FaShopify /><p>Shopify</p></div>
                  <div><FaMagento /><p>Magento</p></div>
                  <div><SiBigcommerce /><p>BigCommerce</p></div>
                  <div><GrOracle /><p>Oracle</p></div>
                  <div><FaDrupal /><p>Drupal</p></div>
                </div>
              : ""}
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Technologies