import React from 'react';
import styles from "./OurJourney.module.scss"

type Props = {}

const OurJourney = (props: Props) => {
  return (
    <>
    
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.itemOne}>
                    <h2>The Story Behind Our Success</h2>
                    <p>We design and develop end-to-end digital products that are user-focused, problem-solving, and built to grow your business.</p>
                </div>
                <div className={styles.itemTwo}>
                    <div className={styles.projects}>
                        <h3>800+</h3>
                        <p>Completed Projects</p>
                    </div>
                    <div className={styles.teamMem}>
                        <h3>125+</h3>
                        <p>Talented Team</p>
                    </div>
                    <div className={styles.client}>
                        <h3>300+</h3>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
            <div className={styles.bgLinearGradient}></div>
        </div>


    </>
  )
}

export default OurJourney