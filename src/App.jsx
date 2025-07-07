import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ComplexFeatures from './components/ComplexFeatures/ComplexFeatures';
import ViewSlider from './components/ViewSlider/ViewSlider';
import PresentationSignUpForm from './components/PresentationSignUpForm/PresentationSignUpForm';
import BuildingClusters from './components/BuildingClusters/BuildingClusters';
import ZoneSection from './components/ZoneSection/ZoneSection';


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

  
      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

