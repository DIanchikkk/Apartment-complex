import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './ViewSlider.module.css';

import poklonnayaHill from '../../assets/img/poklonnayahill.png';
import moscowCity from '../../assets/img/moscowcity.png';
import matveyevskyForest from '../../assets/img/matveyevskyforest.png';
import ramenskiyDistrict from '../../assets/img/ramenkidistrict.png';

function ViewSlider() {
  const views = [
    { image: poklonnayaHill, label: 'Поклонная гора' },
    { image: moscowCity, label: 'Москва-Сити' },
    { image: matveyevskyForest, label: 'Матвеевский лес' },
    { image: ramenskiyDistrict, label: 'Район Раменки' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const onSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index, 0); 
    }
  };

  return (
    <section className={styles['view-slider']}>
      <h2 className={styles['view-slider__title']}>
        Наслаждайтесь видами <br />
        из окон своей квартиры
      </h2>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={onSlideChange}
        navigation={{
          prevEl: `.${styles['nav-button-prev']}`,
          nextEl: `.${styles['nav-button-next']}`,
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true} 
        className={styles['view-slider__swiper']}
      >
        {views.map((view, index) => (
          <SwiperSlide key={index}>
            <div className={styles['slide-wrapper']}>
              <img
                src={view.image}
                alt={view.label}
                className={styles['view-slider__image']}
                draggable={false}
              />

              {activeIndex === index && (
                <div className={styles['view-slider__overlay']}>
                  {views.map((v, i) => (
                    <button
                      key={i}
                      className={`${styles['overlay-tab-button']} ${
                        activeIndex === i ? styles['overlay-tab-button--active'] : ''
                      }`}
                      onClick={() => goToSlide(i)}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}

        <button
          className={`${styles['nav-button']} ${styles['nav-button-prev']}`}
          aria-label="Previous slide"
        >
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0136 20L0 10L10.0136 0L11.7347 1.71875L4.64918 8.77232H23V11.2277H4.64918L11.7347 18.3036L10.0136 20Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          className={`${styles['nav-button']} ${styles['nav-button-next']}`}
          aria-label="Next slide"
        >
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0136 20L0 10L10.0136 0L11.7347 1.71875L4.64918 8.77232H23V11.2277H4.64918L11.7347 18.3036L10.0136 20Z"
              fill="white"
              transform="scale(-1, 1) translate(-23, 0)"
            />
          </svg>
        </button>
      </Swiper>
    </section>
  );
}

export default ViewSlider;
