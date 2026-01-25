import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Heading from './components/Heading';
import SareeSection from './components/SareeSection';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner></Banner>
      <Heading></Heading>
      <SareeSection></SareeSection>
    </div>
  );
}

export default App;
