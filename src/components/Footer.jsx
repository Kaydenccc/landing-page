import './Footer.scss';
import React from 'react';
import Logo from '../images/image 3.png';
import Ig from '../svg/Ig';
import Facebook from '../svg/Facebook';
import Twitter from '../svg/Twitter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-1">
        <img src={Logo} alt="logo" />
        <h1>Zeitplan</h1>
        <p>Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal mungkin.</p>
        <p className="copyright">COPYRIGHT (C) 2021. DESIGN BY NAUVAL</p>
      </div>
      <div className="col-2">
        <h1>Sitemap</h1>
        <p>Beranda</p>
        <p>Fitur-fitur</p>
        <p>Harga</p>
        <p>Testimoni</p>
        <p>Download</p>
      </div>
      <div className="col-3">
        <h1>Partner</h1>
        <p>Sefan.ru</p>
        <p>Ganool</p>
        <p>Waptrick</p>
        <p>Stafaband</p>
        <p>MyWapBlog</p>
      </div>
      <div className="col-4">
        <h1>Tetep Terhubung</h1>
        <p>Lihat kami pansos di sosial media berikut:</p>
        <div className="icons_mediaSosial">
          <Ig />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
