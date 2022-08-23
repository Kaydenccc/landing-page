import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Fitur from './components/Fitur';
import Price from './components/Price';
import Testimoni from './components/Testimoni';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Fitur stopAnimate={true} />
      <Price />
      <Testimoni />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
