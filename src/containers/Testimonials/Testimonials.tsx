'use client'
import React, { useRef, useState } from 'react';
import styles from "./Testimonials.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaLongArrowAltRight, FaLongArrowAltLeft,FaQuoteLeft } from "react-icons/fa";


type Props = {}

const Testimonials = (props: Props) => {
    const swiperRef = useRef<any>(null);
    const reviews = [
        {
        "name": "Zainab Al Maktoum",
        "designation": "Digital Strategist",
        "location": "Dubai, UAE",
        "message": "Working with 7CTECH was an excellent decision. They quickly understood our goals and built a smooth, scalable platform. Their team was responsive, professional, and delivered on time. We’re beyond happy with the results and ongoing support."
        },
        {
        "name": "Liam Turner",
        "designation": "CEO, UrbanEdge Studios",
        "location": "Sydney, Australia",
        "message": "7CTECH brought our software idea to life with precision. Their developers are smart, efficient, and committed to quality. We loved how involved they kept us during the build. It’s rare to find such dependable partners in tech."
        },
        {
        "name": "Aaliyah Noor",
        "designation": "Marketing Lead, TechSphere",
        "location": "Dubai, UAE",
        "message": "From wireframes to deployment, 7CTECH handled everything smoothly. The final product was exactly what we needed — fast, clean, and user-friendly. They always communicated well and stayed on schedule. Truly a great team to collaborate with."
        },
        {
        "name": "Michael Roberts",
        "designation": "Product Manager, ByteCore Solutions",
        "location": "San Francisco, USA",
        "message": "Our experience with 7CTECH was outstanding. They delivered complex features with clean code and solid testing. The collaboration was smooth, and they were always proactive in solving challenges. We're excited to work with them again on future projects."
        },
        {
        "name": "Emily Carter",
        "designation": "CTO, NovaBridge Tech",
        "location": "Austin, USA",
        "message": "7CTECH exceeded our expectations. Their frontend and backend teams worked seamlessly, delivering a polished product on time. Communication was constant, and they handled last-minute changes without issues. Definitely one of the best tech partners we've worked with globally."
        }
    ]
      
    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <div className={styles.itemOne}>
                            <h2>Our Clients Love The Results.</h2>
                            <p>Trusted by industry leaders, we deliver innovation backed by real results and firsthand experience.</p>
                        </div>
                        <div className={styles.itemTwo}>
                            <Swiper
                                className={`mySwiper ${styles.swiper}`}
                                loop={true}
                                slidesPerView={3.3}
                                spaceBetween={15}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                breakpoints={{
                                    1: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2.2,
                                    },
                                    1024: {
                                        slidesPerView: 2.3,
                                    },
                                }}
                            >
                                {reviews?.map((item, ind) => {
                                    return(
                                        <SwiperSlide className={styles.slide}>
                                            <div className={styles.slideContent}>
                                                <p className={styles.quote}><FaQuoteLeft /></p>
                                                <h3 className={styles.name}>{item?.name}, <span className={styles.designation}>{item?.designation}</span></h3>
                                                <p className={styles.location}>{item?.location}</p>
                                                <p className={styles.message}>{item?.message}</p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                            <div className={styles.swiperBtns}>
                                <button className={styles.prevBtn} onClick={() => swiperRef.current?.slidePrev()}><FaLongArrowAltLeft /></button>
                                <button className={styles.nextBtn} onClick={() => swiperRef.current?.slideNext()}><FaLongArrowAltRight /></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bgLinearGradient}></div>
                </div>
            </section>    
        </>
    )
}

export default Testimonials