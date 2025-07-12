import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = [
  {
    id:1,
    title: "Kursus Pemrograman Web",
    img: "/src/img/kursus1.jpg",
    description:
      "Kemajuan teknologi saat ini bukan hanya menghasilkan website yang keren tetapi juga tools untuk membuat website yang super keren dan mudah digunakan. Dengan tools tersebut, kamu yang bukan jagoan koding (programmer web) sekalipun mudah untuk membuat website sendiri dan yang memiliki nilai jual. Kelas ini akan mengajarkan kamu secara interaktif dan menyenangkan bagaimana proses pembuatan website tanpa koding dengan aplikasi Mobirise. Kami juga akan membagikan tips dan trik menarik dan tidak ketinggalan juga aset-aset digital yang siap kamu gunakan untuk kebutuhan praktik selama mengikuti kelas ini. Gimana? Udah siap untuk buat sesuatu yang menarik? Yuk buruan gabung ke kelasnya!",
    link: "/bayar-kursus/1",
    },
  {
    id:2,
    title: "Kursus Data Science",
    img: "/src/img/kursus2.png",
    description:
      "Data Science adalah bidang yang sangat penting dalam dunia teknologi saat ini. Dalam kursus ini, Anda akan mempelajari konsep dasar Data Science, termasuk pengumpulan data, analisis data, dan penerapan machine learning. Kursus ini dirancang untuk pemula yang ingin memahami bagaimana data dapat digunakan untuk mengambil keputusan yang lebih baik.",
    link: "/bayar-kursus/2",
    },
  {
    id:3,
    title: "Kursus Desain Grafis",
    img: "/src/img/kursusdesain.png",
    description:
      "Desain grafis adalah seni menciptakan visual yang menarik dan efektif. Dalam kursus ini, Anda akan belajar tentang prinsip-prinsip desain, penggunaan perangkat lunak desain seperti Adobe Photoshop dan Illustrator, serta cara membuat karya desain yang profesional. Kursus ini cocok untuk siapa saja yang ingin mengembangkan keterampilan desain mereka.",
    link: "/bayar-kursus/3",
    },
  {
    id:4,
    title: "Kursus Pemasaran Digital",
    img: "/src/img/kursus3.jpg",
    description:
      "Pemasaran digital adalah kunci untuk sukses dalam bisnis online. Dalam kursus ini, Anda akan mempelajari strategi pemasaran digital, termasuk SEO, media sosial, dan iklan online. Kursus ini dirancang untuk membantu Anda memahami cara memasarkan produk atau layanan Anda secara efektif di dunia digital.",
    link: "/bayar-kursus/4",
    }
];
function DetailKursus() {
    const { id } = useParams();
  const detail = Detail.find((k) => k.id === parseInt(id));

  if (!detail) {
    return <div className="text-center mt-16">Kursus tidak ditemukan.</div>;
  }
  return (
    <div className="flex justify-between items-center p-6 bg-white shadow-md rounded-lg mt-16">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {detail.title}
            </h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed space-y-4 max-w-3xl text-justify">{detail.description}</p>
          </div>
          <div>
            <img
              src={detail.img}
              alt={detail.title}
              className="h-64"
            />
            <p className="text-gray-600 mt-6">Harga: Rp300.000</p>
            <Link to={detail.link}>
            <button className="bg-blue-600 text-white rounded-lg w-16 h-8 mt-4">
              Beli
            </button>
            </Link>
          </div>
        </div>

  );
}

export default DetailKursus;
