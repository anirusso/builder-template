import Image from 'next/image';
import styles from './page.module.css';
import Main from 'public/home2.jpeg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>builder template</h1>
        <p className={styles.description}>Your company's motto here</p>
        <button className={styles.button}>See Our Work</button>
      </div>
      <div className={styles.item}>
        <Image src={Main} className={styles.img} />
      </div>
    </div>
  );
}
