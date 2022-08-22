import logo from '../images/image 3.png';
import { BsArrowRight } from 'react-icons/bs';
import Main from './Main';

const Header = () => {
  return (
    <section className="section__headaer">
      <div className="container">
        <header className="App-header">
          <nav>
            <div class="nav__left">
              <img src={logo} alt="logo" />
              <p class="logo_name">ZEITPLAN</p>
            </div>
            <div class="nav__right">
              <ul>
                <li>Home</li>
                <li>Fitur-Fitur</li>
                <li>Harga</li>
                <li>Testimoni</li>
                <li>
                  <a href="app.js">Download</a>
                  <BsArrowRight className="btn-icons" />
                </li>
              </ul>
            </div>
          </nav>
          <Main />
        </header>
      </div>
    </section>
  );
};

export default Header;
