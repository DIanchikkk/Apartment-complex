import styles from './HeroSection.module.css';
import logo2 from '../../assets/img/logo2.svg'; 

function HeroSection() {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__content']}>
        <img src={logo2} alt="Логотип 2" className={styles['hero__logo']} />
        <h1 className={styles['hero__title']}>
          Жизнь в зелёном оазисе <br />
          в статусном районе Москвы
        </h1>
        <p className={styles['hero__subtitle']}>
          Жилой комплекс бизнес-класса в 20 минутах от Кремля
        </p>
        <div className={styles['hero__underline']} />
      </div>
    </section>
  );
}

export default HeroSection;
