import React from 'react';
import JadwalCard from './JadwalCard';
import './Fitur.scss';
import { FaHeadset } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';

const CardWrapper = (props) => {
  console.log(props.stopAnimate);
  const icons = () => (
    <svg width="33" height="20" viewBox="0 0 33 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.00243 4.72402L15.1827 0.299304C15.9554 0.0581909 16.7891 0.0581909 17.5613 0.299304L31.7421 4.72402C32.9388 5.09731 32.9388 6.70456 31.7421 7.07784L29.2699 7.8492C30.1121 8.90655 30.6871 17.8409 30.7946 19.6325C30.8049 19.8045 30.6679 19.9446 30.4957 19.9446H28.2972C28.1178 19.9446 27.9775 19.7932 27.9961 19.6148C28.1684 17.9549 28.8525 10.5124 27.5039 8.40061L17.5618 11.5031C17.1012 11.6466 16.2177 11.8258 15.1832 11.5031L1.00243 7.07836C-0.194763 6.70456 -0.194763 5.09782 1.00243 4.72402ZM14.7053 13.0824C16.1557 13.5347 17.3915 13.2848 18.0397 13.0824L25.4119 10.7823L26.1328 16.6403C26.1328 18.4654 21.7629 19.9446 16.3723 19.9446C10.9816 19.9446 6.6117 18.4654 6.6117 16.6403L7.33256 10.7818L14.7053 13.0824Z"
        fill="white"
      />
    </svg>
  );
  return (
    <div class="content_left">
      <p className="line"></p>
      <h1>Jadwal</h1>
      <ul>
        <li>Senin</li>
        <li>Selasa</li>
        <li>Rabu</li>
        <li>Kamis</li>
        <li>Jum'at</li>
      </ul>
      <div class="wrapper__jadwal">
        <JadwalCard color="rgba(70, 203, 24, 1)" time="In Masjid Syamsul Ulum, at 08.00 - 10.00" judul="Pengajian Rutin" />
        <JadwalCard stopAnimate={props.stopAnimate} color="rgba(108, 26, 214, 1)" icon={FaHeadset} time="In KU3.07.21, at 08.30 - 10.30" judul="Bahasa Indonesia" name="Agus Suryana" />
        <JadwalCard color="rgba(108, 26, 214, 1)" icon={icons} time="In B4, at 14.30 - 16.30" judul="Pemrograman Berbasis Sensor" />
        <JadwalCard stopAnimate={props.stopAnimate} color="#FC5B31" icon={FaShoppingCart} time="In Indomart, at 20.45 - 21.00" judul="Belanja Mingguan" />
        <JadwalCard color="#72797F" icon={IoLogoGameControllerB} time="In Kosan, at 23.30 - 02.00" judul="Mabar Mobile Legend" />
      </div>
    </div>
  );
};

export default CardWrapper;
