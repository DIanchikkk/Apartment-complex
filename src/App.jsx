import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HeroBanner from './components/HeroBanner/HeroBanner';
import ComplexFeatures from './components/ComplexFeatures/ComplexFeatures';
import ViewSlider from './components/ViewSlider/ViewSlider';


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
  
      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

