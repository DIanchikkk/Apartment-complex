import React, { useReducer, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TestPage.module.css';
import arrowIcon from '../../assets/img/→.svg';
import { IMaskInput } from 'react-imask';

import flatImage from '../../assets/img/firstFlat.png';
import penthouseImage from '../../assets/img/secondFlat.png';
import studioImage from '../../assets/img/studio.png';
import oneRoomImage from '../../assets/img/oneRoom.png';
import multiRoomImage from '../../assets/img/multiRoom.png';
import areaSmallImage from '../../assets/img/firstArea.svg';
import areaMediumImage from '../../assets/img/secondArea.svg';
import areaLargeImage from '../../assets/img/thirdArea.svg';
import whatsappIcon from '../../assets/img/whatsapp.svg';
import telegramIcon from '../../assets/img/telegram.svg';
import viberIcon from '../../assets/img/viber.svg';

const initialState = {
  currentStep: 1,
  selectedOption: null,
  selectedMessenger: null,
  phone: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SELECT_OPTION':
      return { ...state, selectedOption: action.payload };
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 5), selectedOption: null };
    case 'PREV_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 1), selectedOption: null };
    case 'SELECT_MESSENGER':
      return { ...state, selectedMessenger: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    default:
      return state;
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Ошибка отловлена:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return <div>⚠️ Произошла ошибка при загрузке блока.</div>;
    }
    return this.props.children;
  }
}

function TestPage() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentStep, selectedOption, selectedMessenger, phone } = state;
  const phoneValid = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/.test(phone);

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ width: 18, height: 18 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const handleBack = () => (currentStep === 1 ? navigate(-1) : dispatch({ type: 'PREV_STEP' }));
  const handleNext = () => selectedOption && dispatch({ type: 'NEXT_STEP' });
  const handleSelect = (option) => dispatch({ type: 'SELECT_OPTION', payload: option });
  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  };

  return (
    <section className={styles.test} key={currentStep}>
      <div className={styles['test__back']} onClick={handleBack}>
        <img src={arrowIcon} alt="Назад" />
        Назад
      </div>

      <div className={styles['test__progress']}>
        {[1, 2, 3, 4, 5].map((step) => (
          <div
            key={`progress-${step}`}
            className={`${styles['test__progress-bar']} ${currentStep >= step ? styles.active : ''}`}
          />
        ))}
      </div>

      {[1, 2, 3].includes(currentStep) && (
        <>
          <h2 className={styles['test__question']}>
            {currentStep === 1 && 'Какая недвижимость вас интересует?'}
            {currentStep === 2 && 'Какая планировка вам подходит?'}
            {currentStep === 3 && 'Какую площадь объекта вы рассматриваете?'}
          </h2>

          <div className={styles['test__options']}>
            {currentStep === 1 && (
              <>
                <Option key="flat" label="Квартира" img={flatImage}
                  selected={selectedOption === 'flat'}
                  onClick={() => handleSelect('flat')} />
                <Option key="penthouse" label="Пентхаус" img={penthouseImage}
                  selected={selectedOption === 'penthouse'}
                  onClick={() => handleSelect('penthouse')} />
              </>
            )}
            {currentStep === 2 && (
              <>
                <Option key="studio" label="Студия" img={studioImage}
                  selected={selectedOption === 'studio'}
                  onClick={() => handleSelect('studio')}
                  extraClass={styles['test__option--studio']} />
                <Option key="one-room" label="1-2 спальни" img={oneRoomImage}
                  selected={selectedOption === 'one-room'}
                  onClick={() => handleSelect('one-room')}
                  extraClass={styles['test__option--one-room']} />
                <Option key="multi-room" label="3-4 спальни" img={multiRoomImage}
                  selected={selectedOption === 'multi-room'}
                  onClick={() => handleSelect('multi-room')}
                  extraClass={styles['test__option--multi-room']} />
              </>
            )}
            {currentStep === 3 && (
              <>
                <Option key="small" label="26 м² — 100 м²" img={areaSmallImage}
                  selected={selectedOption === 'small'}
                  onClick={() => handleSelect('small')}
                  extraClass={styles['test__option--small']} />
                <Option key="medium" label="100 м² — 150 м²" img={areaMediumImage}
                  selected={selectedOption === 'medium'}
                  onClick={() => handleSelect('medium')}
                  extraClass={styles['test__option--medium']} />
                <Option key="large" label="150 м² — 192 м²" img={areaLargeImage}
                  selected={selectedOption === 'large'}
                  onClick={() => handleSelect('large')}
                  extraClass={styles['test__option--large']} />
              </>
            )}
          </div>
        </>
      )}

      {currentStep === 4 && (
        <>
          <h2 className={styles['test__question']}>
            Планируете ли вы использовать <br /> подземный паркинг?
          </h2>
          <div className={styles['test__options']}>
            {['parking-yes', 'parking-no'].map((val) => (
              <div
                key={`parking-${val}`}
                className={`${styles['test__option']} ${styles['test__option--parking']} ${
                  selectedOption === val ? styles.selected : ''
                }`}
                role="button"
                tabIndex="0"
                aria-label={val === 'parking-yes' ? 'Да, планирую' : 'Не планирую'}
                onClick={() => handleSelect(val)}
                onKeyDown={(e) => handleKeyDown(e, () => handleSelect(val))}
              >
                <span>{val === 'parking-yes' ? 'Да, планирую' : 'Не планирую'}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {currentStep < 5 && (
        <button
          className={styles['test__next-button']}
          disabled={!selectedOption}
          onClick={handleNext}
        >
          Дальше
        </button>
      )}

      {currentStep === 5 && (
        <ErrorBoundary>
          <>
            <h2 className={styles['test__question']}>
              Подобрали 4 варианта недвижимости <br />
              по вашим параметрам. Куда их прислать?
            </h2>

            <div className={styles['test__options']}>
              {['whatsapp', 'telegram', 'viber'].map((option) => (
                <div
                  key={`messenger-${option}`}
                  className={`${styles['test__messenger']} ${
                    selectedMessenger === option ? styles.selected : ''
                  }`}
                  role="button"
                  tabIndex="0"
                  onClick={() => dispatch({ type: 'SELECT_MESSENGER', payload: option })}
                  onKeyDown={(e) =>
                    handleKeyDown(e, () => dispatch({ type: 'SELECT_MESSENGER', payload: option }))
                  }
                >
                  <div className={styles['test__circle-checkbox']}>
                    {selectedMessenger === option && <CheckIcon />}
                  </div>
                  <img
                    src={
                      option === 'whatsapp'
                        ? whatsappIcon
                        : option === 'telegram'
                        ? telegramIcon
                        : viberIcon
                    }
                    alt={option}
                  />
                  <span>
                    {option === 'whatsapp'
                      ? 'в WhatsApp'
                      : option === 'telegram'
                      ? 'в Telegram'
                      : 'в Viber'}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles['test__phone-input-wrapper']}>
              
              <IMaskInput
                mask="+7 000 000 00 00"
                value={phone}
                onAccept={(value) => dispatch({ type: 'SET_PHONE', payload: value })}
                placeholder="+7 ___ ___ __ __"
                className={styles['test__phone-input']}
              />

              <button
                disabled={!phoneValid || !selectedMessenger}
                className={styles['test__submit-button']}
              >
                Получить варианты в{' '}
                {selectedMessenger === 'telegram'
                  ? 'Telegram'
                  : selectedMessenger === 'whatsapp'
                  ? 'WhatsApp'
                  : 'Viber'}
              </button>
            </div>

            <p className={styles['test__disclaimer']}>
              Нажимая на кнопку, вы соглашаетесь на обработку персональных данных и&nbsp;
              <a
                href="#"
                className={styles['test__disclaimer-link']}
                onClick={(e) => e.preventDefault()}
              >
                политику конфиденциальности
              </a>
            </p>
          </>
        </ErrorBoundary>
      )}
    </section>
  );
}

function Option({ label, img, selected, onClick, extraClass = '' }) {
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ width: 18, height: 18 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`${styles['test__option']} ${extraClass} ${selected ? styles.selected : ''}`}
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className={`${styles['test__checkbox']} ${selected ? styles.checked : ''}`}>
        {selected && <CheckIcon />}
      </div>
      <img src={img} alt={label} />
      <span>{label}</span>
    </div>
  );
}

export default TestPage;
