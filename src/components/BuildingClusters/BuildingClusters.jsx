import React, { useRef, useEffect } from 'react';
import styles from './BuildingClusters.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import firstTitle from '../../assets/img/Title.svg';
import secondTitle from '../../assets/img/secondTitle.svg';
import firstPhoto from '../../assets/img/firstPhoto.png';
import secondPhoto from '../../assets/img/secondPhoto.png';
import thirdPhoto from '../../assets/img/thirdPhoto.png';
import fourthPhoto from '../../assets/img/fourthPhoto.png';
import fifthPhoto from '../../assets/img/fifthPhoto.png';
import sixthPhoto from '../../assets/img/sixthPhoto.png';
import seventhPhoto from '../../assets/img/seventhPhoto.png';
import eighthPhoto from '../../assets/img/eighthPhoto.png';

const ClusterBlock = ({ variant, logo, description, hint, images, buttonLabel }) => {
  const swiperRef = useRef(null);


  useEffect(() => {
    if (swiperRef.current?.autoplay?.start) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <div className={`${styles.fullWidthBackground} ${styles[`fullWidthBackground--${variant}`]}`}>
      <section className={styles.clusters__section}>
        <div className={styles.clusters__header}>
          <div className={styles['clusters__header-left']}>
            <img src={logo} alt="Logo" className={styles.clusters__logo} />
            <p className={styles.clusters__description}>{description}</p>
          </div>
          <button className={styles.clusters__button}>{buttonLabel}</button>
        </div>

        <div className={styles.clusters__carousel}>
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{
              prevEl: `.${styles['nav-button-prev']}`,
              nextEl: `.${styles['nav-button-next']}`,
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className={styles.clusters__imageWrapper}>
                  <img src={img.src} alt={`Slide ${index + 1}`} className={styles.clusters__image} />
                  {index === 0 && <div className={styles.clusters__hint}>{hint}</div>}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Кнопки навигации вне Swiper */}
          <button className={`${styles['nav-button']} ${styles['nav-button-prev']}`} aria-label="Назад">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0136 20L0 10L10.0136 0L11.7347 1.71875L4.64918 8.77232H23V11.2277H4.64918L11.7347 18.3036L10.0136 20Z" fill="white"/>
            </svg>
          </button>

          <button className={`${styles['nav-button']} ${styles['nav-button-next']}`} aria-label="Вперёд">
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0136 20L0 10L10.0136 0L11.7347 1.71875L4.64918 8.77232H23V11.2277H4.64918L11.7347 18.3036L10.0136 20Z"
                    fill="white"
                    transform="scale(-1, 1) translate(-23, 0)" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

const BuildingClusters = () => {
  return (
    <div className={styles.clusters}>
      <ClusterBlock
        variant="dark"
        logo={firstTitle}
        description={
          <>
            8 жилых корпуса по 12–14 этажей <br />
            на острые Индольские Раменки
          </>
        }
        hint="Можно провести вечер, сидя на мостике около реки"
        images={[
          { src: eighthPhoto },
          { src: firstPhoto },
          { src: thirdPhoto },
          { src: fourthPhoto },
        ]}
        buttonLabel="Посмотреть планировки"
      />

      <ClusterBlock
        variant="light"
        logo={secondTitle}
        description={
          <>
            Семь 14-этажных жилых корпусов, <br /> расположенных вдоль Матвеевского леса
          </>
        }
        hint="Возле набережной места для прогулки и детской площадки"
        images={[
          { src: secondPhoto },
          { src: fifthPhoto },
          { src: sixthPhoto },
          { src: seventhPhoto },
        ]}
        buttonLabel="Посмотреть планировки"
      />
    </div>
  );
};

export default BuildingClusters;

