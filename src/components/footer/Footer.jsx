import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 anirusso</div>
      <div className={styles.social}>
        <Image
          src="/icon1.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="facebook"
        ></Image>
        <Image
          src="/icon2.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="twitter"
        ></Image>
        <Image
          src="/icon3.png"
          width={25}
          height={25}
          className={styles.icon}
          alt="instagram"
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
