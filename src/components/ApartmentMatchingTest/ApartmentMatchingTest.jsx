import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ApartmentMatchingTest.module.css';
import firstGroup from '../../assets/img/firstGroup.svg';  
import secondGroup from '../../assets/img/secondGroup.svg'; 

function ApartmentMatchingTest() {
  const navigate = useNavigate();

  return (
    <section className={styles.test}>
      <img src={firstGroup} alt="декор слева" className={styles['test__svg-left']} />
      <img src={secondGroup} alt="декор справа" className={styles['test__svg-right']} />

      <div className={styles['test__content']}>
        <h2 className={styles['test__title']}>Какая квартира подойдёт именно вам?</h2>
        <p className={styles['test__subtitle']}>
          Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости
        </p>
        <button
          className={styles['test__button']}
          onClick={() => navigate('/test')}
        >
          Пройти тест
        </button>
      </div>
    </section>
  );
}

export default ApartmentMatchingTest;
