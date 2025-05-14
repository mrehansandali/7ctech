'use client'
import React from 'react';
import Form from '../Form/Form';
import styles from "./GetStarted.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {}

const GetStarted = (props: Props) => {

    const [formDrawer, setFormDrawer] = React.useState(false)

    const togglediscussYourIdeaDrawer = () => {
    setFormDrawer(!formDrawer);
    };
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <p>Fire It Up!</p>
                    <h3 data-aos="fade-up">Let's bring your vision to life</h3>
                    <button onClick={() => togglediscussYourIdeaDrawer()}>Get Started <FaArrowRightLong /></button>
                </div>
            </section>
            <Form open={formDrawer} toggle={togglediscussYourIdeaDrawer} />
        </>
    )
}

export default GetStarted