import React from 'react';
import '../App.scss';
import avatar from '../images/unsplash_SE4Xc1WvIkU.png';
import background from '../images/Group 44.png';
import CardWrapper from './CardWrapper';

const Main = () => {
  return (
    <main>
      <div class="main_left">
        <h1 class="title__main">Sebuah cara mudah mengatur jadwal kuliah kamu</h1>
        <p class="text__main">Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~</p>
        <div class="btn_warpper">
          <a href="main.js" className="btn_link">
            Learn More
          </a>
          <a href="main.js" className="btn_link">
            Play Demo
          </a>
        </div>
        <div class="testimoni">
          <div class="testimoni__wrapper">
            <div class="testimoni_card">
              <div class="test_star">
                <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="3" fill="#FFC93F" />
                  <path
                    d="M8.70329 5.81663C9.07012 5.07346 10.1299 5.07346 10.4967 5.81663L11.3452 7.53549C11.4907 7.83034 11.7719 8.0348 12.0972 8.08235L13.9962 8.35992C14.8161 8.47976 15.1429 9.4876 14.5493 10.0658L13.1768 11.4026C12.9409 11.6323 12.8332 11.9635 12.8889 12.288L13.2126 14.1754C13.3527 14.9924 12.4952 15.6154 11.7616 15.2295L10.0654 14.3376C9.77407 14.1843 9.42593 14.1843 9.13455 14.3376L7.43843 15.2295C6.7048 15.6154 5.84725 14.9924 5.98737 14.1754L6.31108 12.288C6.36674 11.9635 6.25908 11.6323 6.02321 11.4026L4.65068 10.0658C4.05708 9.4876 4.38387 8.47976 5.20378 8.35992L7.10276 8.08235C7.42812 8.0348 7.7093 7.83034 7.85484 7.53549L8.70329 5.81663Z"
                    fill="white"
                  />
                  <rect x="25" width="20" height="20" rx="3" fill="black" fill-opacity="0.2" />
                  <path
                    d="M33.7033 5.81663C34.0701 5.07346 35.1299 5.07346 35.4967 5.81663L36.3452 7.53549C36.4907 7.83034 36.7719 8.0348 37.0972 8.08235L38.9962 8.35992C39.8161 8.47976 40.1429 9.4876 39.5493 10.0658L38.1768 11.4026C37.9409 11.6323 37.8332 11.9635 37.8889 12.288L38.2126 14.1754C38.3527 14.9924 37.4952 15.6154 36.7616 15.2295L35.0654 14.3376C34.7741 14.1843 34.4259 14.1843 34.1345 14.3376L32.4384 15.2295C31.7048 15.6154 30.8473 14.9924 30.9874 14.1754L31.3111 12.288C31.3667 11.9635 31.2591 11.6323 31.0232 11.4026L29.6507 10.0658C29.0571 9.4876 29.3839 8.47976 30.2038 8.35992L32.1028 8.08235C32.4281 8.0348 32.7093 7.83034 32.8548 7.53549L33.7033 5.81663Z"
                    fill="white"
                  />
                  <rect x="50" width="20" height="20" rx="3" fill="black" fill-opacity="0.2" />
                  <path
                    d="M58.7033 5.81663C59.0701 5.07346 60.1299 5.07346 60.4967 5.81663L61.3452 7.53549C61.4907 7.83034 61.7719 8.0348 62.0972 8.08235L63.9962 8.35992C64.8161 8.47976 65.1429 9.4876 64.5493 10.0658L63.1768 11.4026C62.9409 11.6323 62.8332 11.9635 62.8889 12.288L63.2126 14.1754C63.3527 14.9924 62.4952 15.6154 61.7616 15.2295L60.0654 14.3376C59.7741 14.1843 59.4259 14.1843 59.1345 14.3376L57.4384 15.2295C56.7048 15.6154 55.8473 14.9924 55.9874 14.1754L56.3111 12.288C56.3667 11.9635 56.2591 11.6323 56.0232 11.4026L54.6507 10.0658C54.0571 9.4876 54.3839 8.47976 55.2038 8.35992L57.1028 8.08235C57.4281 8.0348 57.7093 7.83034 57.8548 7.53549L58.7033 5.81663Z"
                    fill="white"
                  />
                  <rect x="75" width="20" height="20" rx="3" fill="black" fill-opacity="0.2" />
                  <path
                    d="M83.7033 5.81663C84.0701 5.07346 85.1299 5.07346 85.4967 5.81663L86.3452 7.53549C86.4907 7.83034 86.7719 8.0348 87.0972 8.08235L88.9962 8.35992C89.8161 8.47976 90.1429 9.4876 89.5493 10.0658L88.1768 11.4026C87.9409 11.6323 87.8333 11.9635 87.8889 12.288L88.2126 14.1754C88.3527 14.9924 87.4952 15.6154 86.7616 15.2295L85.0655 14.3376C84.7741 14.1843 84.4259 14.1843 84.1345 14.3376L82.4384 15.2295C81.7048 15.6154 80.8473 14.9924 80.9874 14.1754L81.3111 12.288C81.3667 11.9635 81.2591 11.6323 81.0232 11.4026L79.6507 10.0658C79.0571 9.4876 79.3839 8.47976 80.2038 8.35992L82.1028 8.08235C82.4281 8.0348 82.7093 7.83034 82.8548 7.53549L83.7033 5.81663Z"
                    fill="white"
                  />
                  <rect x="100" width="20" height="20" rx="3" fill="black" fill-opacity="0.2" />
                  <path
                    d="M108.703 5.81663C109.07 5.07346 110.13 5.07346 110.497 5.81663L111.345 7.53549C111.491 7.83034 111.772 8.0348 112.097 8.08235L113.996 8.35992C114.816 8.47976 115.143 9.4876 114.549 10.0658L113.177 11.4026C112.941 11.6323 112.833 11.9635 112.889 12.288L113.213 14.1754C113.353 14.9924 112.495 15.6154 111.762 15.2295L110.065 14.3376C109.774 14.1843 109.426 14.1843 109.135 14.3376L107.438 15.2295C106.705 15.6154 105.847 14.9924 105.987 14.1754L106.311 12.288C106.367 11.9635 106.259 11.6323 106.023 11.4026L104.651 10.0658C104.057 9.4876 104.384 8.47976 105.204 8.35992L107.103 8.08235C107.428 8.0348 107.709 7.83034 107.855 7.53549L108.703 5.81663Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p class="text__testimonial">“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”</p>
              <div class="profile__testimonial">
                <div class="profile_left">
                  <img src={avatar} alt="avatar" />
                  <div class="descript">
                    <h4>P-Star 7</h4>
                    <p>Mahasiswa Boating School Ny. Puff</p>
                  </div>
                </div>
                <div class="profile_right">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
          <span className="span one"></span>
          <span className="span two"></span>
        </div>
      </div>
      <div class="main_right">
        <div class="container__right">
          <img src={background} alt="backgrond" />
          <CardWrapper />
        </div>
      </div>
    </main>
  );
};

export default Main;
