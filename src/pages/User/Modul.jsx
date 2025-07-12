import React from 'react';
import { useParams } from 'react-router-dom';

const DataKursus = [
  {
    id: 1,
    title: "Kursus Pemrograman Web",
    description: "Pelajari cara membuat situs web modern dengan HTML, CSS, dan JavaScript.",
    img: "/src/img/kursus1.jpg",
    harga: "Rp300.000",
  },
  {
    id: 2,
    title: "Kursus Data Science",
    description: "Pelajari analisis data, machine learning, dan visualisasi data.",
    img: "/src/img/kursus2.png",
    harga: "Rp500.000",
  },
];

const DataModul = [
    {
        id: 1,
        title: "Modul 1: Pengenalan HTML",
        duration: "1 jam",
    },
    {
        id: 2,
        title: "Modul 2: Pengenalan CSS",
        duration: "1.5 jam",
    },
    {
        id: 3,
        title: "Modul 3: Pengenalan JavaScript",
        duration: "2 jam",
    }
]
function Modul() {
    const { id } = useParams();
  const kursus = DataKursus.find((k) => k.id === parseInt(id));

  if (!kursus) {
    return <div className="text-center mt-16">Kursus tidak ditemukan.</div>;
  }

  const modul = DataModul;
    if (!modul) {
        return <div className="text-center mt-16">Modul tidak ditemukan.</div>;
    }

    return(
        <div className='grid grid-cols-2 gap-4 w-full p-4 bg-white '>
            <div>
            <h1 className='text-2xl font-bold text-gray-800 m-4'>{kursus.title}</h1>
            <img src={kursus.img} alt={kursus.title} />
            <p className='m-4 text-gray-600 font-semibold border-b-1 '>Review</p>
            </div>

            <div className='border-l border-gray-300 p-4'>
            <h1 className='text-2xl font-bold text-gray-800 m-4'>Daftar Modul</h1>
            {modul.map((modul)=> (
                <div key={modul.id} className='bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 p-4 mb-4'>
                    <p className='text-l font-bold text-gray-800'>{modul.title}</p>
                    <p className='text-gray-600'>{modul.duration}</p>
                </div>
            ))}
           
            </div>
        </div>
    )
}

export default Modul;