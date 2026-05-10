import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const {
        photo, foodName, category, restaurantName,
        location, email, price, rating, reviewCount,
        review, description, deliveryTime, isAvailable
    } = useLoaderData();

    const [qty, setQty] = useState(1);

    return (
        <div className="max-w-md mx-auto px-3 py-3 flex flex-col gap-2">

            {/* Hero */}
            <div className="relative rounded-xl overflow-hidden h-44">
                <img src={photo} alt={foodName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end">
                    <div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30 mb-1 inline-block">{category}</span>
                        <h1 className="text-lg font-bold text-white leading-tight">{foodName}</h1>
                        <p className="text-xs text-white/70">
                            {isAvailable && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1 align-middle" />}
                            {restaurantName} · {location}
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-yellow-400 text-xs">{'★'.repeat(Math.round(rating))}</div>
                        <div className="text-xs text-white/60">{(reviewCount/1000).toFixed(0)}k reviews</div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { val: rating.toFixed(1), lbl: 'Rating' },
                    { val: deliveryTime, lbl: 'Delivery' },
                    { val: `${(reviewCount/1000).toFixed(0)}k`, lbl: 'Reviews' },
                ].map(({ val, lbl }) => (
                    <div key={lbl} className="bg-gray-100 rounded-lg p-2 text-center">
                        <div className="text-base font-bold">{val}</div>
                        <div className="text-xs text-gray-400">{lbl}</div>
                    </div>
                ))}
            </div>

            {/* Description */}
            <div className="border border-gray-200 rounded-xl p-3">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">About</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>

           

            {/* Info */}
            <div className="border border-gray-200 rounded-xl p-3">
                {[
                    { label: 'Restaurant', val: restaurantName },
                    { label: 'Location', val: location },
                    { label: 'Contact', val: email },
                    { label: 'Delivery', val: deliveryTime },
                ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between py-1 border-b border-gray-100 last:border-none text-xs">
                        <span className="text-gray-400">{label}</span>
                        <span className="font-medium text-gray-700">{val}</span>
                    </div>
                ))}
            </div>

            {/* Price + Qty + Buttons */}
            <div className="flex items-center justify-between">
                <p className="text-2xl font-bold"><sup className="text-sm align-super">$</sup>{price}</p>
                <div className="flex items-center gap-2">
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-7 h-7 rounded-lg border border-gray-200 bg-gray-100 text-base flex items-center justify-center">−</button>
                    <span className="text-sm font-medium w-4 text-center">{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} className="w-7 h-7 rounded-lg border border-gray-200 bg-gray-100 text-base flex items-center justify-center">+</button>
                </div>
            </div>

            <button className="w-full py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                🛒 Add {qty} to Cart — ${price * qty}
            </button>
            

        </div>
    );
};

export default Details;