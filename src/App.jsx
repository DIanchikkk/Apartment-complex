import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';
import HeroBanner from './components/HeroBanner/HeroBanner';

function App() {
  return (
    <div className="page">
      <div className="page__intro">
        <Header />
         <HeroSection />  
         <HeroBanner />
      </div>
  
      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

