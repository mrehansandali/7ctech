import React from 'react';
import styles from "./IconsSlider.module.scss";

type Props = {}

const IconsSlider = (props: Props) => {

    const iconsImg = [
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2Famanda_uprichard_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FSabina_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FVarley_logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FFor_Love_%26_Lemons_Logo.png%3Fprofile%3Db&w=1920&q=75',
        'https://www.fashionpass.com/_next/image?url=https%3A%2F%2Fimages.fashionpass.com%2Fassets%2Fimg%2FBeachRiot_logo.png%3Fprofile%3Db&w=1920&q=75',
        
    ]
  return (
    <>
        <section>
            <div className={styles.container}>
                <div className={styles.item}>
                    {iconsImg?.length > 0 ?
                        <>
                            {iconsImg?.map((item,ind) => {
                                return (
                                    <div key={ind} className={styles.imgContainer}><img src={item} alt="Img" /></div>
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