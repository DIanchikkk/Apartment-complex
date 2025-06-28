import styles from './Header.module.css';  
import headerLogo from '../../assets/logo1.svg'; 

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['header__left']}>
        <img src={headerLogo} alt="Логотип" className={styles.headerLogo} />
        <span className={styles['header__partner-wrapper']}>
          <span className={styles['header__partner-text']}>Официальный партнёр</span>
          <span className={styles['header__partner-company']}>АО «КККК»</span>
        </span>
      </div>

      <div className={styles['header__right']}>
        <div className={styles['header__phone']}>+7 495 845 19 34</div>
        <div className={styles['header__phone-layout']}></div>
        <div className={styles['header__working-status']}>
          <span className={styles['header__dot']} /> работаем
        </div>
      </div>
    </header>
  );
}

export default Header;
