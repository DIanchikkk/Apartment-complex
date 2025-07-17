import React, { useEffect } from 'react';
import styles from './LightDarkModal.module.css';

const LightDarkModal = ({
  isOpen,
  onClose,
  title,
  imagePrimary,
  patternBackground,
  leftColorClass = '',
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modal__overlay} onClick={onClose} />

      <button className={styles.modal__close} onClick={onClose} aria-label="Закрыть модалку">
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
          <path d="M21 7L7 21M7 7L21 21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <div className={styles.modal__content}>
        <div className={styles.modal__body}>
          <div className={`${styles.modal__left} ${styles[leftColorClass]}`}>
            <img
              src={imagePrimary}
              alt="Дизайн буклет"
              className={styles.modal__primaryImage}
            />
            <img
              src={patternBackground}
              alt="Фон"
              className={styles.modal__overlayImage}
            />
          </div>

          <div className={styles.modal__right}>
            <h2 className={styles.modal__title}>
            Получите дизайн-буклет с подробным описанием отделки <strong>{title}</strong>
            </h2>

            <a href="#" className={styles.modal__pdf} download>
              PDF можно скачать прямо сейчас
            </a>

            <form
              className={styles.modal__form}
              onSubmit={(e) => {
                e.preventDefault();
                const phone = e.target.phone.value;
                const valid = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/.test(phone);
                if (valid) {
                  alert('Форма отправлена!');
                  onClose();
                } else {
                  alert('Введите корректный номер телефона');
                }
              }}
            >
              <input
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className={styles.modal__input}
                required
              />
              <button type="submit" className={styles.modal__button}>
                Скачать буклет
              </button>
            </form>

            <p className={styles.modal__disclaimer}>
              Нажимая на кнопку, вы даёте согласие на&nbsp;обработку персональных данных и&nbsp;
              <a href="#" target="_blank" rel="noopener noreferrer">
                соглашаетесь с политикой конфиденциальности
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightDarkModal;
