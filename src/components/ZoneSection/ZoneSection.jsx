import React from 'react';
import styles from './ZoneSection.module.css';

import firstLogo from '../../assets/img/elevator.svg';
import secondLogo from '../../assets/img/Vector.svg';
import firstZone from '../../assets/img/firstZone.png';
import secondZone from '../../assets/img/secondZone.png';
import thirdZone from '../../assets/img/thirdZone.png';
import fourdZone from '../../assets/img/fourdZone.png';

const zones = [
  {
    logo: firstLogo,
    title: 'Центральные входные группы',
    items: [
      'Зона ожидания и встреч',
      'Пост охраны',
      'Переговорная комната',
      'Колясочная',
    ],
    images: [firstZone, secondZone],
  },
  {
    logo: secondLogo,
    title: 'Лифтовый холл',
    items: [
      '2–4 лифта',
      'Грузовые и пассажирские',
      'Ведущие производители',
    ],
    images: [thirdZone, fourdZone],
  },
];

const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.zoneSection__starIcon}
  >
    <path
      d="M9 0L11.7812 5.92523L18 6.87539L13.5 11.4875L14.5623 18L9 14.9252L3.43769 18L4.5 11.4875L0 6.87539L6.21885 5.92523L9 0Z"
      fill="#D5B753"
    />
  </svg>
);

const ZoneSection = () => {
  return (
    <div className={styles.zoneSections}>
      {zones.map((zone, index) => (
        <div key={index} className={styles.zoneSection}>
          <div className={styles.zoneSection__header}>
            <img src={zone.logo} alt="logo" className={styles.zoneSection__logo} />
            <h2 className={styles.zoneSection__title}>{zone.title}</h2>
          </div>

          <div className={styles.zoneSection__starItems}>
            {zone.items.map((item, i) => (
              <div key={i} className={styles.zoneSection__starItem}>
                <StarIcon /> {item}
              </div>
            ))}
          </div>

          <div className={styles.zoneSection__images}>
            {zone.images.map((image, i) => (
              <img
                key={i}
                src={image}
                alt={`zone-${index + 1}-img-${i + 1}`}
                className={styles.zoneSection__image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZoneSection;
