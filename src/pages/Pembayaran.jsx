import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Bayar = [
     {
    id: 1,
    title: "Kursus Pemrograman Web",
    description:
      "Pelajari cara membuat situs web modern dengan HTML, CSS, dan JavaScript.",
    img: "/src/img/kursus1.jpg",
    harga: "Rp300.000",
    link: "",
  },
  {
    id: 2,
    title: "Kursus Data Science",
    description:
      "Pelajari analisis data, machine learning, dan visualisasi data.",
    img: "/src/img/kursus2.png",
    harga: "Rp500.000",
    link: "",
  },
  {
    id: 3,
    title: "Kursus Desain Grafis",
    description:
      "Pelajari dasar-dasar desain grafis dan penggunaan software desain.",
    img: "/src/img/kursusdesain.png",
    harga: "Rp400.000",
    link: "",
  },
  {
    id: 4,
    title: "Kursus Pemasaran Digital",
    description:
      "Pelajari strategi pemasaran online dan penggunaan media sosial.",
    img: "/src/img/kursus3.jpg",
    harga: "Rp350.000",
    link: "",
  },
];

function Pembayaran() {
    const { id } = useParams();
  const bayar = Bayar.find((k) => k.id === parseInt(id));

  if (!bayar) {
    return <div className="text-center mt-16">Kursus tidak ditemukan.</div>;
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
          <h1 className="text-2xl font-bold text-gray-800 m-8">
            Pembayaran Kursus
          </h1>
      <div class="grid grid-cols-2 gap-4 justify-start items-start w-full p-8 bg-white shadow-md">
        <div className="">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Informasi Pelanggan</h2>
          <p className="font-semibold text-l text-gray-400 mb-4">
            Lengkapi form di bawah ini
          </p>
          <p className="mb-2">Email</p>
            <input
                type="email"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                placeholder="Masukkan email Anda"
            />
            <p className="mb-2 ">
                Nama Lengkap
            </p>
            <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                placeholder="Masukkan nama lengkap Anda"
            />
            <p className="mb-2">Nomor WhatsApp</p>
            <input
                type="text"
                className="border border-gray-300 rounded-lg p-2 w-full mb-4"
                placeholder="Masukkan nomor WhatsApp Anda"
            />
        </div>
        <div>
            <h1 className="text-xl font-bold text-gray-800 mb-4">{bayar.title}</h1>
            <img src={bayar.img} alt={bayar.title} className="" />
            <p className="text-gray-600 mt-4">{bayar.description}</p>
            <p className="text-gray-600 mt-4 font-bold">Harga: {bayar.harga}</p>
            <Link to='' className="text-blue-500 hover:underline">
            <button className="bg-blue-600 text-white rounded-lg w-full h-10 mt-4">
                Bayar Sekarang
            </button>
            </Link>
        </div>
        <div className="col-span-2 mt-8">


        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
