import React from 'react';
import CardTestimoni from './CardTestimoni';
import './Testimoni.scss';
//IMPORT AVATAR
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar4 from '../images/avatar4.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';
// IMPORT SVG
import StartOne from '../svg/startOne';
import StartTwo from '../svg/startTwo';
import Star5 from '../svg/star5';

const Testimoni = () => {
  const avatars = [
    {
      avatar: avatar1,
      Star: StartOne,
      desc: 'โTerima kasih untuk aplikasinya, karena aplikasi ini murid-murid saya jadi rajin kuliah walaupun nggak ada adab. Adab tidak perlu kuliah nomor satu! ๐๐๐โ',
      username: 'Sanusi Sulivan',
      profesi: 'Dosen di Boating School Ny. Puff',
    },
    {
      avatar: avatar4,
      Star: Star5,
      desc: 'โAq kmrn koq instla di hp qu gx bs y? ap krn aq pke hp miTho? admin tLonk dnk bntU instlA d hp qu, aq mw pKe apkxโ',
      username: 'Indah Cyank Dya Clmax',
      profesi: 'Works at Looking For True Love, Inc',
    },
    {
      avatar: avatar2,
      Star: StartTwo,
      desc: 'โGara-gara aplikasi ini aku tidak bisa bolos kuliah, padahal cita-citaku ingin bolos kuliah dan menitipkan absen saja. Huft.โ',
      username: 'Wahyu Hayuk',
      profesi: 'Mahasiswa Abadi',
    },

    {
      avatar: avatar5,
      Star: StartTwo,
      desc: 'โPengiriman cepat,,, seller ramah,, packing juga rapih, tapi barangnya belom dicoba... saya kasih bintang satu dulu,,,, nanti kalo udah dicoba saya kasih bintang dua,,, nanti kalo udah peterpen jadi bintang di surga... xixixixi... ๐๐๐๐๐โ',
      username: 'Jumadi RT. 03',
      profesi: 'Ketua RT. 06',
    },
    {
      avatar: avatar3,
      Star: StartOne,
      desc: 'โHanya di rezim ini ada aplikasi yang membuat anak saya menjadi rajin kuliah walaupun tidak menjadi pandai. Terima kasih Papa Zola!โ',
      username: 'Ibu Scarlet Darkening',
      profesi: 'Ibunya Wahyu Hayuk',
    },
    {
      avatar: avatar6,
      Star: StartOne,
      desc: 'โaplikasinya keren! mjb, nder.... aku numpang lapak yaaa ... Jual Netflix Spotify disney plus Youtube prem Iqiyi Grammarly Viu Canva Wetv Vidio Mola tv picsart Tezza Unfold Aligh motion Vsco Lightroom get contact apple music amazon prime resso iflix Microsoft 365 HBO GO zoom.โ',
      username: 'Cucunya Megalodon',
      profesi: 'Pecinta Kucing Hungaria',
    },
  ];
  return (
    <section className="testimoni">
      <div className="testimoni__container">
        <h1>Apa kata umat manusia tentang aplikasi keren ini?</h1>
        <p>Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli tanpa reksadana.</p>
        <div className="testimoni__cardWrapper">
          {avatars.map((item, index) => (
            <CardTestimoni key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
