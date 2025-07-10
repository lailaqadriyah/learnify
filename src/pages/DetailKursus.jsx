import React from "react";

const Detail = [
  {
    title: "Kursus Pemrograman Web",
    description:
      "Kemajuan teknologi saat ini bukan hanya menghasilkan website yang keren tetapi juga tools untuk membuat website yang super keren dan mudah digunakan. Dengan tools tersebut, kamu yang bukan jagoan koding (programmer web) sekalipun mudah untuk membuat website sendiri dan yang memiliki nilai jual. Kelas ini akan mengajarkan kamu secara interaktif dan menyenangkan bagaimana proses pembuatan website tanpa koding dengan aplikasi Mobirise. Kami juga akan membagikan tips dan trik menarik dan tidak ketinggalan juga aset-aset digital yang siap kamu gunakan untuk kebutuhan praktik selama mengikuti kelas ini. Gimana? Udah siap untuk buat sesuatu yang menarik? Yuk buruan gabung ke kelasnya!",
  },
];
function DetailKursus() {
  return (
    <div>
      {Detail.map((detail) => (
        <div
          key={detail.title}
          className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg mt-16"
        >
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {detail.title}
            </h1>
            <p className="text-gray-600 mb-4">{detail.description}</p>
          </div>
          <div>
            <img
              src="/src/img/kursus1.jpg"
              alt={detail.title}
              className="h-64"
            />
            <p className="text-gray-600 mt-6">Harga: Rp300.000</p>
            <button className="bg-blue-600 text-white rounded-lg w-16 h-8 mt-4">
              Beli
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailKursus;
