import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Fitur from './components/Fitur';
import Price from './components/Price';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Fitur stopAnimate={true} />
      <Price />
    </div>
  );
}

export default App;
