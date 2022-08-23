import React from 'react';
import './Download.scss';
import appstore from '../images/appstore.png';
import googleplay from '../images/googleplay.png';
const Download = () => {
  return (
    <section className="download_section">
      <div className="download_container">
        <h1>Download Aplikasi Keren Ini Sekarang!</h1>
        <p>Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga ditambah weekend. Jadi, please download lah ya.</p>
        <div className="wrapper__download">
          <img src={appstore} alt="appstore" />
          <img src={googleplay} alt="googleplay" />
        </div>
      </div>
    </section>
  );
};

export default Download;
