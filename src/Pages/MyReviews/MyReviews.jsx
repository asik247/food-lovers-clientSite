import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useSecure2 from '../../Hooks/useSecure2';
import useInstance from '../../Hooks/useInstance';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useJWTInstance from '../../Hooks/JWTToken/useJWTInstance';

const MyReviews = () => {
    const { user } = useAuth();
    const instance2 = useSecure2();
    const instance = useInstance();
    // Jwt cusom generat toke implement✔️✔️
    const jwtInstance = useJWTInstance()

    const [myr, setMyr] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // fetch data
    useEffect(() => {
        if (user?.email) {
            setLoading(true);

            jwtInstance(`/myReviews?email=${user.email}`)
                .then(res => {
                    setMyr(res.data);
                    setLoading(false);
                    // console.log(res.data.token);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
    }, [user, jwtInstance]);

    // delete
    const deleteMyReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#6366F1",
            cancelButtonColor: "#EF4444",
            confirmButtonText: "Yes, delete it!"
        }).then(result => {
            if (result.isConfirmed) {
                instance.delete(`/allReviews/${id}`)
                    .then(() => {
                        setMyr(prev => prev.filter(r => r._id !== id));

                        Swal.fire("Deleted!", "Your review has been deleted.", "success");
                    });
            }
        });
    };

    // filter
    const filtered = myr.filter(item => {
        const matchSearch =
            item.foodName?.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            selectedCategory === 'All' ||
            item.category === selectedCategory;

        return matchSearch && matchCategory;
    });

    const categories = ['All', ...new Set(myr.map(r => r.category))];

    // skeleton
    const SkeletonCard = () => (
        <div className="bg-white rounded-2xl h-80 animate-pulse border" />
    );

    return (
        <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">

            {/* HEADER */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row justify-between gap-4">

                    <div>
                        <p className="text-xs font-semibold uppercase text-violet-500">
                            My Feedback
                        </p>

                        <h1 className="text-3xl font-bold text-gray-800">
                            My Reviews
                        </h1>

                        <p className="text-sm text-gray-500">
                            {loading
                                ? '—'
                                : `${filtered.length} review${filtered.length !== 1 ? 's' : ''}`}
                        </p>
                    </div>

                    {/* search */}
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search reviews..."
                        className="w-full sm:w-72 px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* categories */}
                {!loading && categories.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs px-4 py-1.5 rounded-full border transition ${selectedCategory === cat
                                        ? 'bg-violet-600 text-white'
                                        : 'bg-white text-gray-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto">

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <SkeletonCard key={i} />
                        ))}
                    </div>
                ) : filtered.length === 0 ? (
                    <p className="text-center text-gray-400 py-24">
                        No reviews found
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

                        {filtered.map(review => (
                            <div
                                key={review._id}
                                className="bg-white rounded-2xl overflow-hidden border hover:shadow-lg transition"
                            >

                                {/* image */}
                                <img
                                    src={review.foodPhoto}
                                    className="h-48 w-full object-cover"
                                />

                                <div className="p-4">

                                    {/* category */}
                                    <span className="text-xs bg-violet-100 text-violet-600 px-3 py-1 rounded-full">
                                        {review.category}
                                    </span>

                                    {/* name */}
                                    <h2 className="font-bold text-gray-800 mt-2">
                                        {review.foodName}
                                    </h2>

                                    {/* review */}
                                    <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                                        {review.addReview}
                                    </p>

                                    {/* buttons */}
                                    <div className="flex gap-2 mt-4">

                                        <Link
                                            to={`/updateMyReviews/${review._id}`}
                                            state={{ review }}
                                            className="flex-1 flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-600 text-white py-2 rounded-lg text-sm"
                                        >
                                            <FaEdit />
                                            Edit
                                        </Link>

                                        <button
                                            onClick={() => deleteMyReview(review._id)}
                                            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm"
                                        >
                                            <FaTrash />
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
};

export default MyReviews;