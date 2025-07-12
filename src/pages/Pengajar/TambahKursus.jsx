import React from 'react';

function TambahKursus(){
    return (
        <div className="flex flex-col items-center justify-start mt-16 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tambah Kursus Baru</h1>
        <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                Judul Kursus
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Masukkan judul kursus"
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Deskripsi
            </label>
            <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                placeholder="Masukkan deskripsi kursus"
            ></textarea>
            </div>
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
                Harga
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="harga"
                type="text"
                placeholder="Masukkan harga kursus"
            />
            </div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            >
            Tambah Kursus
            </button>
        </form>
        </div>
    );
}

export default TambahKursus;