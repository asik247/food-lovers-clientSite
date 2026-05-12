import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useInstance from '../../Hooks/useInstance';
import Swal from 'sweetalert2';
import useSecqure from '../../Hooks/useSecqure';

const Details = () => {
    //!instanceSecure;
    const instance2 = useSecqure();
    //?currentuser and instance get;
    const { user } = useAuth();
    // console.log('currentUser', user);
    const instance = useInstance();
    //?show reviews state;
    const [reviews, setReviews] = useState([]);
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
        price,
        rating,
        reviewCount,
        description,
        deliveryTime,
        isAvailable,
        _id: productId
    } = useLoaderData();
    //! load reviews
    useEffect(() => {
        instance2(`/allReviews/${productId}`)
            .then(res => {
                // console.log(res.data);
                setReviews(res.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, [instance2, productId]);
    //! add review
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
                    handleModalRef.current?.close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been post",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
                newReview._id = res.data.insertedId;
                const updatedReview = [...reviews, newReview];
                setReviews(updatedReview);
            })
            .catch(error => {
                console.log(error);
            });
    };
    //!Review Remove;
    const handleReviewRemove = (id) => {
        console.log('remvoe review', id);
        instance.delete(`/allReviews/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Remove Review successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                const remineReview = reviews.filter(review => review._id !== id);
                setReviews(remineReview)
            })
    }

    return (

        <div className="max-w-2xl mx-auto px-3 py-3 flex flex-col gap-3">
            {/* HERO */}
            <div className="relative rounded-xl overflow-hidden h-52">
                <img
                    src={photo}
                    alt={foodName}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                    <div>

                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 text-white border border-white/30">
                            {category}
                        </span>

                        <h1 className="text-xl font-bold text-white mt-2">
                            {foodName}
                        </h1>

                        <p className="text-xs text-white/70 mt-1">
                            {isAvailable && (
                                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1" />
                            )}
                            {restaurantName} · {location}
                        </p>

                    </div>

                    <div className="text-right text-white">

                        <div className="text-yellow-400">
                            {'★'.repeat(Math.round(rating))}
                        </div>

                        <div className="text-xs text-white/70">
                            {reviewCount} reviews
                        </div>

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

                    <div
                        key={item.lbl}
                        className="bg-gray-100 rounded-xl p-3 text-center"
                    >

                        <div className="font-bold">
                            {item.val}
                        </div>

                        <div className="text-xs text-gray-400">
                            {item.lbl}
                        </div>

                    </div>
                ))}

            </div>
            {/* DESCRIPTION */}
            <div className="border border-gray-200 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    About
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>
            {/* PRICE */}
            <div className="flex justify-between items-center">
                <p className="text-3xl font-bold">
                    <sup className="text-sm">$</sup>
                    {price}
                </p>

            </div>
            {/* REVIEW BUTTON */}
            <button
                onClick={handleModalOpen}
                className="w-full bg-black text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition"
            >
                Add Review
            </button>
            {/* REVIEW MODAL */}
            <dialog
                ref={handleModalRef}
                className="modal modal-bottom sm:modal-middle"
            >

                <div className="modal-box w-11/12 max-w-2xl p-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-[#0f172a] text-white">

                    {/* HEADER */}
                    <div className="relative overflow-hidden">
                        {/* GRADIENT */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700"></div>
                        {/* HEADER CONTENT */}
                        <div className="relative flex items-center justify-between px-7 py-6">

                            <div>

                                <p className="text-xs uppercase tracking-[4px] text-white/60 mb-1">
                                    Food Experience
                                </p>

                                <h3 className="text-2xl font-bold">
                                    Submit Review
                                </h3>

                                <p className="text-sm text-white/70 mt-1">
                                    Share your opinion about this delicious food
                                </p>

                            </div>

                            {/* CLOSE BUTTON */}
                            <form method="dialog">

                                <button
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition backdrop-blur-md text-lg"
                                >
                                    ✕
                                </button>

                            </form>

                        </div>

                    </div>
                    {/* BODY */}
                    <div className="px-7 py-7 bg-[#0f172a]">
                        <form onSubmit={handlePostDBReview}>
                            {/* USER INFO */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                                {/* USER NAME */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={user?.displayName}
                                        readOnly
                                        className="input w-full rounded-2xl bg-[#1e293b] border border-[#334155] text-white placeholder:text-gray-500"
                                    />

                                </div>
                                {/* USER EMAIL */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        User Email
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        readOnly
                                        className="input w-full rounded-2xl bg-[#1e293b] border border-[#334155] text-white placeholder:text-gray-500"
                                    />

                                </div>
                                {/* PRODUCT PRICE */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Product Price
                                    </label>

                                    <input
                                        type="text"
                                        defaultValue={`$ ${price}`}
                                        readOnly
                                        className="input w-full rounded-2xl bg-[#1e293b] border border-[#334155] text-pink-400 font-bold"
                                    />

                                </div>
                            </div>
                            {/* REVIEW */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Your Review
                                </label>
                                <textarea
                                    name="review"
                                    rows={5}
                                    placeholder="Write your honest experience about this food..."
                                    required
                                    className="textarea w-full rounded-2xl bg-[#1e293b] border border-[#334155] text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500"
                                />
                            </div>
                            {/* BUTTON */}
                            <button
                                className="w-full py-3 rounded-2xl font-semibold text-white text-sm bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
                            >
                                Submit Review 🚀
                            </button>

                        </form>
                    </div>
                </div>
            </dialog>
            {/* REVIEWS */}
            <div className="mt-2">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-semibold text-gray-800">
                        Customer Reviews
                    </h2>
                    <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                        {reviews.length} total
                    </span>
                </div>
                {reviews.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 border border-dashed border-gray-200 rounded-xl text-gray-400">
                        <span className="text-3xl mb-2">💬</span>
                        <p className="text-xs">
                            No reviews yet. Be the first!
                        </p>
                    </div>
                ) : (

                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="table w-full text-xs">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Review</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((singleReview, index) => (
                                    <tr key={singleReview._id}>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <img
                                                src={singleReview.foodPhoto}
                                                alt={singleReview.foodName}
                                                className="w-10 h-10 rounded-lg object-cover"
                                            />
                                        </td>
                                        <td>
                                            {singleReview.foodName}
                                        </td>

                                        <td>
                                            {singleReview.addReview}
                                        </td>

                                        <td>
                                            {singleReview.foodEmail}
                                        </td>

                                        <td>
                                            ...{singleReview.productId?.slice(-6)}
                                        </td>

                                        <td>
                                            <button onClick={() => handleReviewRemove(singleReview._id)}
                                                className="btn btn-xs btn-error btn-outline"
                                            >
                                                Remove
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