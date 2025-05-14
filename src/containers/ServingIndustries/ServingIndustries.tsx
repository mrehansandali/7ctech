import React from 'react';
import styles from "./ServingIndustries.module.scss"

type Props = {}

const ServingIndustries = (props: Props) => {
  return (
    <>

    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header} data-aos="fade-right">
          <h2>Industries We Serve</h2>
          <p>From industry insight to execution, we turn your challenges into opportunities through personalized solutions that make a real difference.</p>
        </div>
        <div className={styles.content}>
          <div data-aos="fade-up">
            <h4>Automotive</h4>
            <p>Improve your vehicle management and enhance customer satisfaction with custom solutions.</p>
          </div>
          <div data-aos="fade-up">
            <h4>Finance</h4>
            <p>Get scalable solutions that improve the efficiency and security of your financial services.</p>
          </div>
          <div data-aos="fade-up">
            <h4>Real Estate</h4>
            <p>Our real estate solutions streamline operations, simplifying property management and sales.</p>
          </div>
          <div data-aos="fade-up">
            <h4>Hospitality</h4>
            <p>Get user-friendly solutions that enhance guest experiences and boost customer satisfaction.</p>
          </div>
          <div data-aos="fade-up">
            <h4>Education</h4>
            <p>Revolutionize ed-tech with solutions that boost student engagement and simplify learning.</p>
          </div>
          <div data-aos="fade-up">
            <h4>Healthcare</h4>
            <p>Our solutions enhance healthcare by streamlining processes and improving patient care.</p>
          </div>
        </div>
      </div>
    </section>
  
  </>
  )
}

export default ServingIndustries