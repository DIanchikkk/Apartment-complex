import styles from './ComplexFeatures.module.css';
import complexOne from '../../assets/img/complexone.png';
import complexTwo from '../../assets/img/complextwo.png';
import complexThree from '../../assets/img/complexthree.png';
import complexFour from '../../assets/img/complexfour.png';

const features = [
  {
    image: complexOne,
    main: '20 гектаров',
    sub: 'территория ЖК — как полтора Зарядья',
  },
  {
    image: complexTwo,
    main: '15 корпусов',
    sub: 'по 12–14 этажей, просторная застройка',
  },
  {
    image: complexThree,
    main: '7 гектаров',
    sub: 'приватного парка для жителей ЖК',
  },
  {
    image: complexFour,
    main: '2 километра',
    sub: 'набережной реки Раменка вдоль ЖК',
  },
];

function ComplexFeatures() {
  return (
    <section className={styles['features']}>
      {features.map((feature, index) => (
        <div key={index} className={styles['features__item']}>
          <img src={feature.image} alt={feature.main} className={styles['features__image']} />
          <div className={styles['features__label']}>
            <div className={styles['features__main']}>{feature.main}</div>
            <div className={styles['features__sub']}>{feature.sub}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ComplexFeatures;
