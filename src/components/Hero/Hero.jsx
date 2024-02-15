import React from 'react'
import styles from './Hero.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
        <div className={styles.container}>
            <div className={styles.hero_con}>
                <div className={styles.hero_info}>
                    <p className={styles.text1}>Wassup Bro!</p>
                    <h3 className={styles.text2}>I'm Tanatip Sengcha</h3>
                    <p className={styles.text3}>I'm Wep App Dev</p>
                    <p className={styles.text4}>To make your document look professionally produced, 
                    Word provides header, footer, cover page, and text box designs that complement each other. 
                    For example, you can add a matching cover page, header, and sidebar.
                     Click Insert and then choose the elements you want from the different galleries.</p>
                    <ul className={styles.hero_social}>
                     <li><a href="#"><FaGithubSquare/></a></li>
                     <li><a href="#"><FaFacebookSquare/></a></li>
                     <li><a href="#"><FaLinkedin/></a></li>
                     <li><a href="#"><FaPhoneSquareAlt/></a></li>
                    </ul>
                </div>
                <div className={styles.hero_image}></div>
            </div>
        </div>
    </div>
  )
}

export default Hero

