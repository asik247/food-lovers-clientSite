import React from 'react';

const LatestProduct = ({ singleData }) => {
    if (!singleData) return null;

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* IMAGE ONLY ZOOM */}
            <div className="relative overflow-hidden">

                <img
                    src={singleData.photo}
                    alt={singleData.foodName}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* badge */}
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-full font-semibold">
                    Popular
                </div>

            </div>

            {/* CONTENT */}
            <div className="p-5">

                {/* FOOD NAME */}
                <h3 className="text-lg font-extrabold text-gray-800 group-hover:text-orange-500 transition">
                    {singleData.foodName}
                </h3>

                {/* RESTAURANT */}
                <p className="text-sm text-gray-600 mt-1">
                    🍽 {singleData.restaurantName}
                </p>

                {/* LOCATION */}
                <p className="text-xs text-gray-400">
                    📍 {singleData.location}
                </p>

                {/* BUTTONS */}
                <div className="mt-4 flex gap-2">

                    {/* VIEW DETAILS */}
                    <button className="flex-1 bg-orange-500 text-white text-xs font-semibold py-2 rounded-xl shadow hover:bg-orange-600 transition">
                        View Details
                    </button>

                    {/* SHOW ALL */}
                    <button className="flex-1 border border-gray-300 text-gray-700 text-xs font-semibold py-2 rounded-xl hover:bg-gray-100 transition">
                        Show All
                    </button>

                </div>

            </div>

        </div>
    );
};

export default LatestProduct;