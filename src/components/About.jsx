import React from 'react';
import './about.scss';
import CardAbout from './CardAbout';
import cardDb from '../svg/cardDb.svg';
import code from '../svg/code.svg';
import wifi from '../svg/wifi.svg';
import user from '../svg/user.svg';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about_left">
          <h1>Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?</h1>
          <p>Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya lambat, kadang tiba-tiba logout sendiri, untung gak berdua.</p>
          <div className="wrapper__total">
            <div className="total">
              <span>TOTAL DOWNLOAD</span>
              <h2>1,501,234</h2>
            </div>
            <div className="total">
              <span>TOTAL USERS</span>
              <h2>1,318,829</h2>
            </div>
          </div>
        </div>
        <div className="about_right">
          <CardAbout name="Aplikasi Gratis" tittle="Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US." svg={cardDb} />
          <CardAbout name="Kode OTP Error" tittle="Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa." svg={wifi} />
          <CardAbout name="Data Tidak Aman" tittle="Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb." svg={user} />
          <CardAbout name="Biasanya Error" tittle="Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~" svg={code} />
        </div>
      </div>
    </section>
  );
};

export default About;
