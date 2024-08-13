import React from "react";

const UserRecherche = () => {
  return (
    <div className="w-full max-w-[1440px] pt-16 md:pb-20 ">
        <h1 className="text-5xl font-bold">Trouver la propriété idéale sur<br/> notre site !</h1>
        <p className="text-2xl mt-1">Sous-titre à changer</p>

        <div className="relative">
            <form className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 md:absolute md:top-8 md:left-1/2 md:transform md:-translate-x-1/2 md:z-10 w-full max-w-4xl">
                <input
                    type="date"
                    placeholder="Check-in"
                    className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="date"
                    placeholder="Check-out"
                    className="border rounded-lg p-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="number"
                    min="1"
                    placeholder="Guests"
                    className="border rounded-lg p-2 w-full md:w-1/6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="bg-blue-500 text-white rounded-lg p-3 w-full md:w-auto hover:bg-blue-600 transition duration-300">
                    Rechercher
                </button>
            </form>
        </div>
    </div>
  );
};

export default UserRecherche;
