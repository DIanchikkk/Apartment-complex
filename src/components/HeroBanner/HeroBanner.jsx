import styles from './HeroBanner.module.css';
import firstComplex from '../../assets/img/firstcomplex.png'; 
import awardImage from '../../assets/img/award.svg'; 

function HeroBanner() {
  return (
    <section className={styles['hero-banner']}>
      <img
        src={firstComplex}
        alt="Жилой комплекс"
        className={styles['hero-banner__image']}
      />

      <div className={styles['hero-banner__award-badge']}>
        <img
          src={awardImage}
          alt="Медаль"
          className={styles['hero-banner__badge-image']}
        />
        <span className={styles['hero-banner__badge-text']}>
          Победитель федеральной премии <br />
          Urban Awards 2019
        </span>
      </div>

      <div className={styles['hero-banner__labels']}>
        <div className={styles['hero-banner__label']}>
          1 очередь — <span className={styles['hero-banner__year']}>2022</span>
        </div>
        <div className={styles['hero-banner__label']}>
          2 очередь — <span className={styles['hero-banner__year']}>2023</span>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
