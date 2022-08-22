import React from 'react';
import './Price.scss';
import PriceCard from './PriceCard';
const Price = () => {
  const array = {
    card1: {
      fitur: ['Jadwal Tak Terbatas', 'Fitur Notifikasi (Kadang Telat)', 'Mode Gelap', 'Bisa Topup Pulsa', 'Bisa Beli Token Listrik', 'Data Lo Dijual'],
      name: 'RINDURATU',
      harga: 'Free',
      describe: 'Akses ke semua fitur gratis tapi data lo dijual ke agen khusus US.',
    },
    card2: {
      fitur: ['Semua Fitur Sebelumnya', 'Diingetin Makan', 'Sleepcall Sampe Bobo', 'Ditemenin Jalan Tiap Minggu', 'Ditemenin Nonton Eksekswan', 'Terhindar Razia Rambut', 'Dapet Izin Bikin Ormas'],
      name: 'SULTAN',
      harga: 'Rp 100K',
      describe: 'Sama aja data lo juga tetep dijual, tapi lo dapet fitur yang lain.',
    },
    card3: {
      fitur: ['Semua Fitur Sebelumnya', 'Dibayarin Kuliah 4 Semester', 'Dibayarin Cicilan Motor', 'Dicicilin KPR 12 Tahun', 'Magang di NASA Cab. Depok', 'Dapet Skin Alok', 'Nonton Film Gratis di Ganool', 'Naik Haji Bila Mampu'],
      name: 'RAFATAR',
      harga: 'Rp 10000K',
      describe: 'Ini juga sama aja, data lo dijual juga. Tapi fitur-fiturnya lebih ok.',
    },
  };
  return (
    <section className="price">
      <div className="wrapper__price">
        <h1 className="row__one">Main catur sambil bersepeda, beda harga beda fitur</h1>
        <p className="row__two">Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih fitur yang spesial buat kamu!</p>
        <div className="row__three">
          <PriceCard card={array.card1} />
          <PriceCard card={array.card2} />
          <PriceCard card={array.card3} />
        </div>
        <p className="row__footer">
          <strong>Harap Diingat:</strong> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara mendadak seperti pengumuman PPKM darurat.
        </p>
      </div>
    </section>
  );
};

export default Price;
