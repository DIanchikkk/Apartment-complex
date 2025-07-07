import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ComplexFeatures from './components/ComplexFeatures/ComplexFeatures';
import ViewSlider from './components/ViewSlider/ViewSlider';
import PresentationSignUpForm from './components/PresentationSignUpForm/PresentationSignUpForm';
import BuildingClusters from './components/BuildingClusters/BuildingClusters';
import ZoneSection from './components/ZoneSection/ZoneSection';
import ApartmentHighlights from './components/ApartmentHighlights/ApartmentHighlights';


function App() {
  return (
    <div className="page">
      <div className="page__intro">
        <Header/>
         <HeroSection/>  
         <HeroBanner/>
      </div>
      <div className="page__features">
         <ComplexFeatures/>
      </div>
      <ViewSlider/>
      <div className='page__form'>
         <PresentationSignUpForm/>
      </div>
      <div className="page__clusters">
        <h3 className="page__clusters-title">Жилой комплекс состоит <br/> из двух кластеров</h3>
        <BuildingClusters/>
      </div>
      <div className='page__zones'>
        <h4 className='page__zones-title'>Современная эстетика лобби</h4>
        <ZoneSection/>
      </div>
      <div className='page__highlights'>
          <h4 className='page__highlights-title'>
              Более 100 свободных квартир <br />
              <span className="page__highlighted-text">
  редких форматов
  <svg
  className="page__highlighted-line"
  width="100%"
  height="7"
  viewBox="0 0 182 7"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1 4.19596C53.0863 2.37347 162.007 -0.0172148 181 5"
    stroke="#A0A747"
    strokeWidth="1" 
  />
</svg>

</span>
          </h4>
          <ApartmentHighlights />
      </div>


  
      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

