import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { FaStar, FaTrash, FaEdit } from 'react-icons/fa';
import useSecqure from '../../Hooks/useSecqure';

const MyReviews = () => {
    const { user } = useAuth();
    const [myr, setMyr] = useState([]);
    const instance = useSecqure()
    // fetch reviews
    useEffect(() => {

        if (user?.email) {
            instance(`/myReviews?email=${user.email}`)
                .then(res => {
                    setMyr(res.data);

                })
                .catch(err => {
                    console.log(err);

                });
        }

    }, [user, instance]);

    return (

        <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-4">

                <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
                    Customer Feedback
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-black mt-2">
                    My Reviews
                </h1>
                <p>{myr.length}</p>

               

            </div>

           {/* Content */}
<div className="max-w-7xl mx-auto">

    {
        myr.length === 0 ? (

            <div className="text-center py-24">

                <h2 className="text-3xl font-bold text-gray-700">
                    No Reviews Found
                </h2>

                <p className="text-gray-400 mt-3">
                    You haven't added any review yet
                </p>

            </div>

        ) : (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {
                    myr.map(review => (

                        <div
                            key={review._id}
                            className="bg-[#1E293B] rounded-3xl overflow-hidden border border-slate-700 hover:border-violet-500 shadow-lg hover:shadow-violet-500/20 transition duration-300"
                        >

                            {/* Image */}
                            <div className="overflow-hidden">

                                <img
                                    src={review.foodPhoto}
                                    alt={review.foodName}
                                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                                />

                            </div>

                            {/* Body */}
                            <div className="p-5">

                                {/* Category */}
                                <span className="inline-block text-xs font-semibold bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full mb-3">
                                    {review.category}
                                </span>

                                {/* Food Name */}
                                <h2 className="text-xl font-bold text-white mb-3">
                                    {review.foodName}
                                </h2>

                                {/* Review */}
                                <div className="bg-[#0F172A] rounded-2xl p-4 mb-5 min-h-[100px] border border-slate-700">

                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        "
                                        {review.addReview}
                                        "
                                    </p>

                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-yellow-400 mb-5">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className="text-slate-600" />

                                </div>

                                {/* Buttons */}
                                <div className="flex gap-3">

                                    {/* Update */}
                                    <button
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-violet-600 text-white py-2.5 rounded-xl text-sm font-medium transition duration-300 border border-slate-700"
                                    >
                                        <FaEdit />
                                        Update
                                    </button>

                                    {/* Delete */}
                                    <button
                                        className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-red-600 text-white py-2.5 rounded-xl text-sm font-medium transition duration-300 border border-slate-700"
                                    >
                                        <FaTrash />
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        )
    }

</div>
        </section>

    );
};

export default MyReviews;