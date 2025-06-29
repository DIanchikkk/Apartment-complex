import './App.css';
import Header from './components/HeaderComponent/Header';
import HeroSection from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="page">
      <div className="page__intro">
        <Header />
         <HeroSection />  
      </div>

      {/* <MainContent /> 
      <Footer /> */}
    </div>
  );
}


export default App;

