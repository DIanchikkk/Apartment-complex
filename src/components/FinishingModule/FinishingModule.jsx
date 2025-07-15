import React from 'react';
import styles from './FinishingModule.module.css';

import firstFinish from '../../assets/img/firstfinish.png';
import secondFinish from '../../assets/img/secondfinish.png';
import thirdFinish from '../../assets/img/thirdfinish.jpg';

const modulesData = [
  {
    title: 'Готовый дизайн\nпроект',
    mainPhoto: firstFinish,
    description:
      'Воспользуйтесь возможностью сразу же заняться меблировкой и благоустройством новой квартиры, как только получите ключи.',
  },
  {
    title: 'Чистота и тишина\nбез шума и пыли',
    mainPhoto: secondFinish,
    description:
      'Забудьте шум от «бесконечного ремонта», соседи и лифт, который подпитает декорированные защиты материалами.',
  },
  {
    title: 'Выгода за счёт\nоптовых закупок',
    mainPhoto: thirdFinish,
    description:
      'Благодаря оптовым закупкам застройщиков получаются возможности сэкономить на стоимость ремонта.',
    isCustom: true,
  },
];

function FinishingModule() {
  return (
    <section className={styles.finishingModules}>
      <h2 className={styles.finishingModules__title}>Отделка от застройщика</h2>

      <div className={styles.finishingModules__subtitleWrapper}>
        <p className={styles.finishingModules__subtitle}>
          Экономьте на стоимость ремонта, покупая квартиру с готовой отделкой
        </p>
        <div className={styles.finishingModules__subtitleLine}></div>
      </div>

      <div className={styles.finishingModules__list}>
        {modulesData.map(({ title, mainPhoto, description, isCustom }, index) => (
          <div key={index} className={styles.finishingModules__item}>
            <div className={styles.finishingModules__photoWrapper}>
              <img
                src={mainPhoto}
                alt={title.replace('\n', ' ')}
                className={styles.finishingModules__photo}
              />

              {isCustom && (
                <div className={styles.finishingModules__customBadgeWrapper}>
                  <div className={styles.finishingModules__circle}>
                    <span className={styles.finishingModules__circleText}>%</span>
                  </div>
                  <div className={styles.finishingModules__blurBox}>
                    Материалы уже подобраны архитекторами
                  </div>
                </div>
              )}
            </div>

            <div className={styles.finishingModules__textContent}>
              <h3 className={styles.finishingModules__itemTitle}>
                {title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
              <p className={styles.finishingModules__description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FinishingModule;