"use client";
import { useState } from "react";

const HomeScreen = () => {
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [partnerGender, setPartnerGender] = useState("");

  const handleCalculate = () => {
    if (userName === "" || partnerName === "") {
      alert("Silakan masukkan nama Anda dan pasangan.");
      return;
    }
    alert("Perhitungan cinta akan segera hadir!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 to-pink-500 p-4">
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
          Selamat Datang di Kalkulator Cinta
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mt-2">
          Temukan % cinta anda
        </p>
      </div>
      <div className="w-full max-w-lg p-6 bg-white bg-opacity-90 rounded-3xl shadow-2xl transition duration-500 transform hover:scale-105">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-lg font-semibold mb-2 text-gray-700 text-center md:text-left">
              Nama Kamu
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama Kamu"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-full p-3 mb-4 border border-gray-300 shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
            />
            <div className="flex justify-center md:justify-start space-x-4">
              <div>
                <input
                  type="radio"
                  id="user_pria"
                  name="user_gender"
                  value="Pria"
                  checked={userGender === "Pria"}
                  onChange={(e) => setUserGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="user_pria" className="text-gray-700">
                  Pria
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="user_wanita"
                  name="user_gender"
                  value="Wanita"
                  checked={userGender === "Wanita"}
                  onChange={(e) => setUserGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="user_wanita" className="text-gray-700">
                  Wanita
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-lg font-semibold mb-2 text-gray-700 text-center md:text-left">
              Nama Pasangan
            </label>
            <input
              type="text"
              placeholder="Masukkan Nama Pasangan"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              className="rounded-full p-3 mb-4 border border-gray-300 shadow-md focus:ring-2 focus:ring-pink-300 focus:outline-none"
            />
            <div className="flex justify-center md:justify-start space-x-4">
              <div>
                <input
                  type="radio"
                  id="partner_pria"
                  name="partner_gender"
                  value="Pria"
                  checked={partnerGender === "Pria"}
                  onChange={(e) => setPartnerGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="partner_pria" className="text-gray-700">
                  Pria
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="partner_wanita"
                  name="partner_gender"
                  value="Wanita"
                  checked={partnerGender === "Wanita"}
                  onChange={(e) => setPartnerGender(e.target.value)}
                  className="mr-2"
                />
                <label htmlFor="partner_wanita" className="text-gray-700">
                  Wanita
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleCalculate}
            className="bg-pink-500 text-white rounded-full py-3 px-8 font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Hitung
          </button>
        </div>
      </div>
      <footer className="mt-8 text-white text-center">
        Developed by Angga Diki Saputra
      </footer>
    </div>
  );
};

export default HomeScreen;
