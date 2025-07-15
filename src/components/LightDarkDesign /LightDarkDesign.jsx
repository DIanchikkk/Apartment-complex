import React from 'react';
import styles from './LightDarkDesign.module.css';

import lightBath from '../../assets/img/lightbath.png';
import darkBath from '../../assets/img/darkbath.png';
import lightHall from '../../assets/img/lighthall.png';
import darkHall from '../../assets/img/darkhall.png';
import lightBed from '../../assets/img/lightbed.png';
import darkBed from '../../assets/img/darkbed.png';
import lightDescription from '../../assets/img/lightdescr.svg';
import darkDescription from '../../assets/img/darkdescr.svg';

const LightDarkDesign = () => {
  return (
    <section className={styles['light-dark-design']}>
      <h2 className={styles['light-dark-design__title']}>Два варианта отделки</h2>


      <div className={styles['light-dark-design__block']}>
        <div className={styles['light-dark-design__line']} />

        <div className={styles['light-dark-design__header']}>
          <h3 className={styles['light-dark-design__block-title']}>Светлая отделка</h3>
          <button className={styles['light-dark-design__download-button']}>
            Скачать дизайн буклет
          </button>
        </div>

        <div className={styles['light-dark-design__gallery']}>
          <img src={lightHall} alt="Light Hall" className={styles['light-dark-design__img']} />
          <img src={lightDescription} alt="Light Description" className={styles['light-dark-design__img']} />
          <img src={lightBath} alt="Light Bath" className={styles['light-dark-design__img']} />
          <img src={lightBed} alt="Light Bed" className={styles['light-dark-design__img']} />
        </div>
      </div>

      <div className={styles['light-dark-design__block']}>
        <div className={styles['light-dark-design__line']} />

        <div className={styles['light-dark-design__header']}>
          <h3 className={styles['light-dark-design__block-title']}>Темная отделка</h3>
          <button className={styles['light-dark-design__download-button']}>
            Скачать дизайн буклет
          </button>
        </div>

        <div className={styles['light-dark-design__gallery']}>
          <img src={darkHall} alt="Dark Hall" className={styles['light-dark-design__img']} />
          <img src={darkDescription} alt="Dark Description" className={styles['light-dark-design__img']} />
          <img src={darkBath} alt="Dark Bath" className={styles['light-dark-design__img']} />
          <img src={darkBed} alt="Dark Bed" className={styles['light-dark-design__img']} />
        </div>
      </div>
    </section>
  );
};

export default LightDarkDesign;
