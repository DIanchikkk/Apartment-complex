import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ComplexFeatures from './components/ComplexFeatures/ComplexFeatures';
import ViewSlider from './components/ViewSlider/ViewSlider';
import PresentationSignUpForm from './components/PresentationSignUpForm/PresentationSignUpForm';


function App() {
  return (
    <div className="page">
      <div className="page__intro">
        <Header />
         <HeroSection />  
         <HeroBanner />
      </div>
      <div className="page__features">
         <ComplexFeatures />
      </div>
      <ViewSlider />
      <div className='page__form'>
         <PresentationSignUpForm/>
      </div>

  
      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

