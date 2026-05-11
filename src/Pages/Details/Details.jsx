import React, { useRef, useState } from 'react';
import { data, useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useInstance from '../../Hooks/useInstance';

const Details = () => {
    //?current user;
    const { user } = useAuth();
    const instance = useInstance()
    console.log('currentUserDetail:', user);
    const handleModalRef = useRef(null);
    const handleModaelOpen = () => {
        handleModalRef.current.showModal();
    }


    const {
        photo, foodName, category, restaurantName,
        location, email, price, rating, reviewCount,
        review, description, deliveryTime, isAvailable, _id: productId
    } = useLoaderData();

    const [qty, setQty] = useState(1);
    //?post reviws in db;
    const handlePostDBReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const newReviews = {
            productId: productId,
            foodName: foodName,
            foodPhoto: photo,
            category: category,
            addReview: review
        }
        //Todo:post all review in server side;
        instance.post('/allReviews', newReviews)
            .then(res => {
                console.log(res.data);
            });
    }
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
                        <div className="text-xs text-white/60">{(reviewCount / 1000).toFixed(0)}k reviews</div>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { val: rating.toFixed(1), lbl: 'Rating' },
                    { val: deliveryTime, lbl: 'Delivery' },
                    { val: `${(reviewCount / 1000).toFixed(0)}k`, lbl: 'Reviews' },
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

            <button onClick={handleModaelOpen} className="w-full py-2.5 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                🛒 Add {qty} to Cart — ${price * qty}
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog ref={handleModalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 overflow-hidden max-w-[480px]">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-base-200">
                        <div>
                            <p className="text-xs text-base-content/50 uppercase tracking-wider mb-0.5">Submit your</p>
                            <h3 className="font-medium text-lg">Product review</h3>
                        </div>
                        <form method="dialog">
                            <button className="btn btn-sm btn-ghost btn-circle">✕</button>
                        </form>
                    </div>

                    {/* Body */}
                    <div className="px-6 py-5">
                        <form onSubmit={handlePostDBReview}>
                            {/* Name & Email */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className="label py-1"><span className="label-text text-xs font-medium">Full name</span></label>
                                    <input type="text" defaultValue={user?.displayName} readOnly placeholder="e.g. Rafiq Ahmed" className="input input-bordered input-sm w-full" />
                                </div>
                                <div>
                                    <label className="label py-1"><span className="label-text text-xs font-medium">Email address</span></label>
                                    <input type="email" defaultValue={user?.email} readOnly placeholder="you@example.com" className="input input-bordered input-sm w-full" />
                                </div>
                            </div>

                            {/* Product Name & Price */}
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className="label py-1"><span className="label-text text-xs font-medium">Product name</span></label>
                                    <input type="text" placeholder="e.g. Wireless Headset" defaultValue={foodName} readOnly className="input input-bordered input-sm w-full" />
                                </div>
                                <div>
                                    <label className="label py-1"><span className="label-text text-xs font-medium">Price paid</span></label>
                                    <input type="number" placeholder="0.00" defaultValue={price} readOnly className="input input-bordered input-sm w-full" />
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="mb-3">
                                <label className="label py-1"><span className="label-text text-xs font-medium">Rating</span></label>
                                <div className="rating rating-md">
                                    <input type="radio" name="rating" className="mask mask-star-2 bg-amber-400" />
                                    <input type="radio" name="rating" className="mask mask-star-2 bg-amber-400" />
                                    <input type="radio" name="rating" className="mask mask-star-2 bg-amber-400" defaultChecked />
                                    <input type="radio" name="rating" className="mask mask-star-2 bg-amber-400" />
                                    <input type="radio" name="rating" className="mask mask-star-2 bg-amber-400" />
                                </div>
                            </div>

                            {/* Review */}
                            <div className="mb-5">
                                <label className="label py-1"><span className="label-text text-xs font-medium">Your review</span></label>
                                <textarea name='review' className="textarea textarea-bordered w-full" rows={4} placeholder="Share your experience..." />
                            </div>

                            <div>
                                <button className="btn btn-neutral w-full">Submit review</button>
                            </div>

                        </form>

                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default Details;