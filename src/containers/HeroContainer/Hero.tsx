import React from 'react';
import styles from "./hero.module.scss"
import { FaLocationArrow } from 'react-icons/fa';

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
    
    <section className={styles.hero}>
        <video autoPlay loop muted className={styles.videoBackground}>
            <source src="https://videos.ctfassets.net/mi665aivb0at/xRSpukKuiLPVNxfEnAsTp/a6a1c03c9cb07431e91ec93e10886b63/Cubix_Home_Hero_Video.webm" />
            Your browser does not support the video tag.
        </video>
        <div className={styles.content}>
          <div>
            <h1>We are <span>Experts </span> <br /> in <span> Software <br /> </span> <span>Creation.</span></h1>
            <button className={styles.btn}>Let's Talk Your Vision <span><FaLocationArrow /></span></button>
            <button className={styles.mblBtn}>Let's Talk <span><FaLocationArrow /></span></button>
          </div>
          <div>
            <p>We don't just build software—we build <span>relationships</span> rooted in trust, transparency, and results. As your development partner, our singular focus is to help you create digital products that make a real difference. From strategy to execution, we're here to deliver outcomes that last—products that perform, engage, and drive your business forward.</p>
          </div>
        </div>
    </section>

        <div className="extra"></div>
    </>
  )
}

export default Hero