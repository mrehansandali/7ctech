import React from 'react';
import styles from "./IconsSlider.module.scss";

type Props = {
    data: any,
    type: string
}

const IconsSlider = ({data, type}: Props) => {

  return (
    <>
        <section>
            <div className={styles.container}>
                <div className={styles.item}>
                    {data?.length > 0 ?
                        <>
                            {data?.map((item:any,ind:any) => {
                                return (
                                    <React.Fragment key={ind}>
                                    {type === 'img' ?
                                        <div key={ind} className={styles.imgContainer}><img src={item} alt="Img" /></div>
                                        : 
                                        <div key={ind} className={styles.textContainer}><p>{item}</p></div>
                                    }
                                    </React.Fragment>
                                )
                            })}
                        </>
                    : ""}
                </div>
            </div>
        </section>  
    </>
  )
}

export default IconsSlider