import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Bayar = [
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

function Pembayaran() {
  const { id } = useParams();

  const [showBanks, setShowBanks] = useState(false);
  const [showEwallet, setShowEwallet] = useState(false);
  const [showKartu, setShowKartu] = useState(false);

  const [selectedBank, setSelectedBank] = useState("");
  const [selectedEwallet, setSelectedEwallet] = useState("");
  const [selectedKartu, setSelectedKartu] = useState("");

  const bayar = Bayar.find((k) => k.id === parseInt(id));

  if (!bayar) {
    return <div className="text-center mt-16">Kursus tidak ditemukan.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 m-8">Pembayaran Kursus</h1>

      <div className="grid grid-cols-2 gap-4 w-full p-8 bg-white shadow-md">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Metode Pembayaran</h2>

          {/* Transfer Bank */}
          <button
            onClick={() => {
              setShowBanks(!showBanks);
              setShowEwallet(false);
              setShowKartu(false);
            }}
            className="inline-flex w-full justify-between rounded-md bg-white p-4 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50"
          >
            {selectedBank || "Transfer Bank"}
            <span className="text-gray-400">{showBanks ? "▲" : "▼"}</span>
          </button>
          {showBanks && (
            <div className="bg-white shadow ring-1 ring-black/5 p-2 mt-2 space-y-2 rounded-md">
              {["Bank BCA", "Bank Mandiri", "Bank BRI"].map((bank) => (
                <label
                  key={bank}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="bank"
                    value={bank}
                    checked={selectedBank === bank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="mr-2"
                  />
                  {bank}
                </label>
              ))}
            </div>
          )}

          {/* E-Wallet */}
          <button
            onClick={() => {
              setShowEwallet(!showEwallet);
              setShowBanks(false);
              setShowKartu(false);
            }}
            className="inline-flex w-full justify-between rounded-md bg-white p-4 mt-4 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50"
          >
            {selectedEwallet || "E-Wallet"}
            <span className="text-gray-400">{showEwallet ? "▲" : "▼"}</span>
          </button>
          {showEwallet && (
            <div className="bg-white shadow ring-1 ring-black/5 p-2 mt-2 space-y-2 rounded-md">
              {["GoPay", "OVO", "Dana"].map((wallet) => (
                <label
                  key={wallet}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="ewallet"
                    value={wallet}
                    checked={selectedEwallet === wallet}
                    onChange={(e) => setSelectedEwallet(e.target.value)}
                    className="mr-2"
                  />
                  {wallet}
                </label>
              ))}
            </div>
          )}

          {/* Kartu Kredit/Debit */}
          <button
            onClick={() => {
              setShowKartu(!showKartu);
              setShowBanks(false);
              setShowEwallet(false);
            }}
            className="inline-flex w-full justify-between rounded-md bg-white p-4 mt-4 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-50"
          >
            {selectedKartu || "Kartu Kredit/Debit"}
            <span className="text-gray-400">{showKartu ? "▲" : "▼"}</span>
          </button>
          {showKartu && (
            <div className="bg-white shadow ring-1 ring-black/5 p-2 mt-2 space-y-2 rounded-md">
              {["Visa", "MasterCard"].map((card) => (
                <label
                  key={card}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="kartu"
                    value={card}
                    checked={selectedKartu === card}
                    onChange={(e) => setSelectedKartu(e.target.value)}
                    className="mr-2"
                  />
                  {card}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Info kursus */}
        <div>
          <h1 className="text-xl font-bold text-gray-800 mb-4">{bayar.title}</h1>
          <img src={bayar.img} alt={bayar.title} />
          <p className="text-gray-600 mt-4">{bayar.description}</p>
          <p className="text-gray-600 mt-4 font-bold">Harga: {bayar.harga}</p>
          <Link to="/metode-bayar">
            <button className="bg-blue-600 text-white rounded-lg w-full h-10 mt-4">
              Bayar Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
