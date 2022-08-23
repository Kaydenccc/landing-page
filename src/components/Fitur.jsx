import CardWrapper from './CardWrapper';
import './Fitur.scss';
import '../App.scss';
import CardFitur from './CardFitur';
import CloudOff from '../svg/CloudOff';
import BellSvg from '../svg/BellSvg';
import Trush from '../svg/Trush';
import VideoSvg from '../svg/VideoSvg';
const Fitur = (props) => {
  return (
    <section className="fitur-container container">
      <div className="fitur__left">
        <div className="bg__fiturLeft"></div>
        <CardWrapper stopAnimate={props.stopAnimate} />
      </div>
      <div className="fitur__right">
        <div className="wrapper__fiturRight">
          <h1>Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~</h1>
          <p>Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!</p>
          <div className="wrapper__cardFitur-right">
            <CardFitur icons={CloudOff} name="Tidak Tersimpan Otomatis" description="Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh." />
            <CardFitur icons={VideoSvg} name="Si Rizal Gak Pernah Ngonten" description="Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten." />
            <CardFitur icons={Trush} name="Terhapus Otomatis" description="Data lo bakal kehapus otomatis tiap hari, biar hemat server kita." />
            <CardFitur icons={BellSvg} name="Nggak Tau Lagi Gw" description="Mikir teks buat konten susah bro, ini aja ngasal masih susah!" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fitur;
