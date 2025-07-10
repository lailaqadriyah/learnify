import React from "react";
import { Link } from "react-router-dom";


const Kursus = [
  {
    id: 1,
    title: "Kursus Pemrograman Web",
    description:
      "Pelajari cara membuat situs web modern dengan HTML, CSS, dan JavaScript.",
    imageUrl: "/src/img/kursus1.jpg",
    harga: "Rp300.000",
    link: "/detail-kursus/1",
  },
  {
    id: 2,
    title: "Kursus Data Science",
    description:
      "Pelajari analisis data, machine learning, dan visualisasi data.",
    imageUrl: "/src/img/kursus2.png",
    harga: "Rp500.000",
    link: "detail-kursus/2",
  },
  {
    id: 3,
    title: "Kursus Desain Grafis",
    description:
      "Pelajari dasar-dasar desain grafis dan penggunaan software desain.",
    imageUrl: "/src/img/kursusdesain.png",
    harga: "Rp400.000",
    link: "detail-kursus/3",
  },
  {
    id: 4,
    title: "Kursus Pemasaran Digital",
    description:
      "Pelajari strategi pemasaran online dan penggunaan media sosial.",
    imageUrl: "/src/img/kursus3.jpg",
    harga: "Rp350.000",
    link: "detail-kursus/4",
  },
];
function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-start mt-16 min-h-screen ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Rekomendasi Kelas Online
      </h1>
      <p className="text-lg text-gray-600">Temukan kelas online mu di sini!</p>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-8">
          {Kursus.map((kursus) => (
            <div
              key={kursus.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={kursus.imageUrl} alt={kursus.title} className="w-full"/>
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
                {kursus.title}
              </h2>
              <p className="text-gray-600 mb-4">{kursus.description}</p>
              <div className="flex justify-between items-center text-black font-bold mb-4">
              <p>Harga</p>
              <p>{kursus.harga}</p>

              </div>
              <Link to={kursus.link} className="text-blue-500 hover:underline">
                Lihat Kursus
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
