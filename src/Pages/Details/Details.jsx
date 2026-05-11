import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useInstance from '../../Hooks/useInstance';

const Details = () => {
    const { user } = useAuth();
    const instance = useInstance();

    const [reviews, setReviews] = useState([]);
    const [qty, setQty] = useState(1);

    const handleModalRef = useRef(null);

    const handleModalOpen = () => {
        handleModalRef.current?.showModal();
    };

    const {
        photo,
        foodName,
        category,
        restaurantName,
        location,
        email,
        price,
        rating,
        reviewCount,
        description,
        deliveryTime,
        isAvailable,
        _id: productId
    } = useLoaderData();

    useEffect(() => {
        instance.get(`/allReviews/${productId}`)
            .then(res => setReviews(res.data));
    }, [instance, productId]);

    const handlePostDBReview = (e) => {
        e.preventDefault();
        const reviewText = e.target.review.value;
        const newReview = {
            productId,
            foodName,
            foodPhoto: photo,
            foodEmail: user?.email,
            category,
            addReview: reviewText
        };
        instance.post('/allReviews', newReview)
            .then(res => {
                if (res.data.insertedId) {
                    newReview._id = res.data.insertedId;
                    setReviews(prev => [...prev, newReview]);
                    handleModalRef.current.close();
                    e.target.reset();
                }
            });
    };



    return (
        <div className="max-w-2xl mx-auto px-3 py-3 flex flex-col gap-3">

            {/* HERO */}
            <div className="relative rounded-xl overflow-hidden h-44">
                <img src={photo} alt={foodName} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-end">
                    <div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30">
                            {category}
                        </span>
                        <h1 className="text-lg font-bold text-white">{foodName}</h1>
                        <p className="text-xs text-white/70">
                            {isAvailable && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1 align-middle" />}
                            {restaurantName} · {location}
                        </p>
                    </div>
                    <div className="text-right text-white">
                        <div className="text-yellow-400">{'★'.repeat(Math.round(rating))}</div>
                        <div className="text-xs text-white/60">{reviewCount} reviews</div>
                    </div>
                </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { val: rating?.toFixed(1), lbl: 'Rating' },
                    { val: deliveryTime, lbl: 'Delivery' },
                    { val: reviewCount, lbl: 'Reviews' },
                ].map(item => (
                    <div key={item.lbl} className="bg-gray-100 rounded-lg p-2 text-center">
                        <div className="font-bold">{item.val}</div>
                        <div className="text-xs text-gray-400">{item.lbl}</div>
                    </div>
                ))}
            </div>

            {/* DESCRIPTION */}
            <div className="border border-gray-200 rounded-xl p-3">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">About</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </div>

            {/* PRICE + QTY */}
            <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">
                    <sup className="text-sm align-super">$</sup>{price}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setQty(q => Math.max(1, q - 1))}
                        className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-100 text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        −
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{qty}</span>
                    <button
                        onClick={() => setQty(q => q + 1)}
                        className="w-8 h-8 rounded-lg border border-gray-200 bg-gray-100 text-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* ADD TO CART */}
            <button
                onClick={handleModalOpen}
                className="w-full bg-black text-white py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
            >
                🛒 Add {qty} to Cart — ${price * qty}
            </button>

            {/* REVIEW MODAL */}
            <dialog ref={handleModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 overflow-hidden max-w-[480px]">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-base-200">
                        <div>
                            <p className="text-xs text-base-content/50 uppercase tracking-wider mb-0.5">Submit your</p>
                            <h3 className="font-medium text-lg">Product Review</h3>
                        </div>
                        <form method="dialog">
                            <button className="btn btn-sm btn-ghost btn-circle">✕</button>
                        </form>
                    </div>
                    <div className="px-6 py-5">
                        <form onSubmit={handlePostDBReview}>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <div>
                                    <label className="label py-1">
                                        <span className="label-text text-xs font-medium">Full name</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        className="input input-bordered input-sm w-full"
                                    />
                                </div>
                                <div>
                                    <label className="label py-1">
                                        <span className="label-text text-xs font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        readOnly
                                        className="input input-bordered input-sm w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="label py-1">
                                    <span className="label-text text-xs font-medium">Your review</span>
                                </label>
                                <textarea
                                    name="review"
                                    className="textarea textarea-bordered w-full"
                                    rows={4}
                                    placeholder="Share your experience..."
                                    required
                                />
                            </div>
                            <button className="btn btn-neutral w-full">Submit Review</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* REVIEWS TABLE */}
            <div className="mt-1">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-800">Customer Reviews</h2>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full font-medium">
                        {reviews.length} total
                    </span>
                </div>

                {reviews.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 border border-dashed border-gray-200 rounded-xl text-gray-400">
                        <span className="text-3xl mb-2">💬</span>
                        <p className="text-xs">No reviews yet. Be the first!</p>
                    </div>
                ) : (
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full text-xs">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">#</th>
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">Image</th>
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">Food Name</th>
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">Food Review</th>
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">Pepole Email</th>
                                    <th className="text-left text-gray-400 font-medium px-4 py-3">Food ID</th>
                                    <th className="text-center text-gray-400 font-medium px-4 py-3">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((singleReview, index) => (
                                    <tr
                                        key={singleReview._id}
                                        className="border-b border-gray-100 last:border-none hover:bg-gray-50 transition-colors"
                                    >
                                        {/* Sl No */}
                                        <td className="px-4 py-3 text-gray-400 font-medium">
                                            {String(index + 1).padStart(2, '0')}
                                        </td>

                                        {/* Food Image */}
                                        <td className="px-4 py-3">
                                            <img
                                                src={singleReview.foodPhoto}
                                                alt={singleReview.foodName}
                                                className="w-10 h-10 rounded-lg object-cover border border-gray-100"
                                            />
                                        </td>

                                        {/* Food Name + Review */}
                                        <td className="px-4 py-3">
                                            <p className="font-semibold text-gray-800 mb-0.5">{singleReview.foodName}</p>

                                        </td>
                                        <td>
                                            <p className="font-semibold text-gray-800 mb-0.5">{singleReview.addReview}</p>
                                        </td>
                                        <td>
                                            <p className="text-gray-400 truncate max-w-[140px]">{singleReview.foodEmail}</p>

                                        </td>

                                        {/* Food ID */}
                                        <td className="px-4 py-3">
                                            <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-mono text-[10px]">
                                                ...{singleReview.productId?.slice(-8)}
                                            </span>
                                        </td>

                                        {/* Remove Button */}
                                        <td className="px-4 py-3 text-center">
                                            <button

                                                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors font-medium"
                                                title="Remove review"
                                            >
                                                <span>✕</span>
                                                <span>Remove</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Details;