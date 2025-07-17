import React, { useState } from 'react';
import styles from './LightDarkDesign.module.css';
import LightDarkModal from './LightDarkModal';

import lightBath from '../../assets/img/lightbath.png';
import darkBath from '../../assets/img/darkbath.png';
import lightHall from '../../assets/img/lighthall.png';
import darkHall from '../../assets/img/darkhall.png';
import lightBed from '../../assets/img/lightbed.png';
import darkBed from '../../assets/img/darkbed.png';
import lightDescription from '../../assets/img/lightd.png';
import darkDescription from '../../assets/img/darkd.png';

import lightBook from '../../assets/img/lightbook.png';
import darkBook from '../../assets/img/darkbook.png';
import patternBackground from '../../assets/img/pattern.svg';

const LightDarkDesign = () => {
  const [modalType, setModalType] = useState(null);
  const closeModal = () => setModalType(null);

  return (
    <section className={styles['light-dark-design']}>
      <h2 className={styles['light-dark-design__title']}>Два варианта отделки</h2>

      <div className={styles['light-dark-design__block']}>
        <div className={styles['light-dark-design__line']} />
        <div className={styles['light-dark-design__header']}>
          <h3 className={styles['light-dark-design__block-title']}>Светлая отделка</h3>
          <button
            className={styles['light-dark-design__download-button']}
            onClick={() => setModalType('light')}
          >
            Скачать дизайн буклет
          </button>
        </div>
        <div className={styles['light-dark-design__gallery']}>
          <img src={lightHall} alt="Light Hall" className={styles['light-dark-design__img']} />
          <div className={`${styles['light-dark-design__info']} ${styles['light']}`}>
            <img
              src={lightDescription}
              alt="Особенности интерьера"
              className={styles['light-dark-design__info-image']}
            />
            <p className={styles['light-dark-design__info-caption']}>Особенности интерьера</p>
            <p className={styles['light-dark-design__info-text']}>
              Отделка в светлом варианте выполнена в тёплых светлых тонах с акцентом на натуральные материалы, подчёркивающих простор, уют и естественное освещение.
            </p>
          </div>
          <img src={lightBath} alt="Light Bath" className={styles['light-dark-design__img']} />
          <img src={lightBed} alt="Light Bed" className={styles['light-dark-design__img']} />
        </div>
      </div>

      <div className={styles['light-dark-design__block']}>
        <div className={styles['light-dark-design__line']} />
        <div className={styles['light-dark-design__header']}>
          <h3 className={styles['light-dark-design__block-title']}>Тёмная отделка</h3>
          <button
            className={styles['light-dark-design__download-button']}
            onClick={() => setModalType('dark')}
          >
            Скачать дизайн буклет
          </button>
        </div>
        <div className={styles['light-dark-design__gallery']}>
          <img src={darkHall} alt="Dark Hall" className={styles['light-dark-design__img']} />
          <div className={`${styles['light-dark-design__info']} ${styles['dark']}`}>
            <img
              src={darkDescription}
              alt="Особенности интерьера"
              className={styles['light-dark-design__info-image']}
            />
            <p className={styles['light-dark-design__info-caption']}>Особенности интерьера</p>
            <p className={styles['light-dark-design__info-text']}>
              Отделка в тёмном варианте выполнена в нейтральных оттенках стен и дополнена напольной доской тёмного дерева, создающей атмосферу уюта и глубины.
            </p>
          </div>
          <img src={darkBath} alt="Dark Bath" className={styles['light-dark-design__img']} />
          <img src={darkBed} alt="Dark Bed" className={styles['light-dark-design__img']} />
        </div>
      </div>

      <LightDarkModal
        isOpen={modalType === 'light'}
        onClose={closeModal}
        title="светлого интерьера"
        imagePrimary={lightBook}
        patternBackground={patternBackground}
        leftColorClass="leftBeige"
      />
      <LightDarkModal
        isOpen={modalType === 'dark'}
        onClose={closeModal}
        title="тёмного интерьера"
        imagePrimary={darkBook}
        patternBackground={patternBackground}
        leftColorClass="leftDark"
      />
    </section>
  );
};

export default LightDarkDesign;
