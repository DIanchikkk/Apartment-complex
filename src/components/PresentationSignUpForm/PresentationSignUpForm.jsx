import styles from './PresentationSignUpForm.module.css';
import girlImage from '../../assets/img/girl.png';
import patternImage from '../../assets/img/pattern.svg';

function PresentationSignUpForm() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.heading}>
            <p className={styles.subheading}>Специально для вас</p>
            <h2 className={styles.title}>
              Персональная <br /> презентация West Garden
            </h2>
          </div>

          <div className={styles.bullets}>
            <div className={styles.bullet}>
              <span className={styles.arrow}>→</span>
              <p>Подробно расскажем про жилой комплекс</p>
            </div>
            <div className={styles.bullet}>
              <span className={styles.arrow}>→</span>
              <p>Ознакомите со всеми планировками и ценами</p>
            </div>
            <div className={styles.bullet}>
              <span className={styles.arrow}>→</span>
              <p>Прогуляйтесь по благоустроенной набережной</p>
            </div>
          </div>

          <div className={styles.separator} />

          <form className={styles.form}>
            <label htmlFor="phone" className={styles.label}>
              Закрепить за номером
            </label>
            <div className={styles.inputGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Записаться на презентацию
              </button>
            </div>
            <p className={styles.agreement}>
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с{' '}
              <a href="#" className={styles.link}>политикой конфиденциальности</a>.
            </p>
          </form>
        </div>

        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img
              src={patternImage}
              alt="pattern"
              className={styles.pattern}
            />
            <img
              src={girlImage}
              alt="Алена Кирющенко"
              className={styles.person}
            />
            <div className={styles.personInfo}>
              <p className={styles.name}>Алена <br/> Кирющенко</p>
              <p className={styles.role}>ведущий эксперт <br/>  по недвижимости  <br/> в ESTES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresentationSignUpForm;
