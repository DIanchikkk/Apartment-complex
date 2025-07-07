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
        
        <div className={styles['hero__subtitle-wrapper']}>
          <p className={styles['hero__subtitle']}>
            Жилой комплекс бизнес-класса в 20 минутах от Кремля
          </p>
          <svg
            className={styles['hero__underline']}
            width="100%"
            height="2"
            viewBox="0 0 182 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.19596C53.0863 2.37347 162.007 -0.0172148 181 5"
              stroke="#A0A747"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
