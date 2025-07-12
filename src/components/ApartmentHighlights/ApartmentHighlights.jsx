import React from 'react';
import styles from './ApartmentHighlights.module.css';
import line from '../../assets/img/linee.svg';

import firstApartment from '../../assets/img/firstApartment.png';
import secondApartment from '../../assets/img/secondApartment.jpg';
import thirdApartment from '../../assets/img/thirdApartment.jpg';
import fourdApartment from '../../assets/img/fourdApartment.png';

const highlights = [
  {
    title: (
      <>
        Свободная планировка, возможность объединить квартиры 
        до  <span className={styles['apartment-highlights__underline-wrapper']}>
           500 м²
          <svg
            className={styles['apartment-highlights__underline']}
            width="182"
            height="7"
            viewBox="0 0 182 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4.19596C53.0863 2.37347 162.007 -0.0172148 181 5"
              stroke="#A0A747"
              strokeWidth="2.5"
            />
          </svg>
        </span>
      </>
    ),
    description:
      'Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера',
    linkText: 'Узнать стоимость →',
    image: firstApartment,
  },
  {
    title: <> Настоящий <br/> дровяной камин</>,
    description:
      'В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года',
    linkText: 'Узнать стоимость →',
    image: secondApartment,
  },
  {
    title: <>Собственная <br/>терраса до 17 м²</>,
    description:
      'Современная терраса с необыкновенными видами на благоустроенную набережную, МГУ им. М.В. Ломоносова и Воробьевы горы',
    linkText: 'Узнать стоимость →',
    image: thirdApartment,
  },
  {
    title: <>Увеличенная высота потолка</>,
    description:
      'Почувствуйте простор помещений в полной мере с увеличенной высотой потолка 4,2 м',
    linkText: 'Узнать стоимость →',
    image: fourdApartment,
  },
];

const ApartmentHighlights = () => {
  return (
    <section className={styles['apartment-highlights']}>
      {highlights.map((item, index) => (
        <div key={index} className={styles['apartment-highlights__item']}>
          <div className={styles['apartment-highlights__content']}>
            <h3 className={styles['apartment-highlights__title']}>{item.title}</h3>
            <p className={styles['apartment-highlights__description']}>{item.description}</p>
            <a href="#" className={styles['apartment-highlights__link']}>
              {item.linkText}
              <img src={line} alt="arrow" className={styles['apartment-highlights__icon']} />
            </a>
          </div>
          <div className={styles['apartment-highlights__image-wrapper']}>
            <img
              src={item.image}
              alt="Изображение квартиры"
              className={styles['apartment-highlights__image']}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ApartmentHighlights;
