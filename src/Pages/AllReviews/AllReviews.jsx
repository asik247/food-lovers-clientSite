import React, { useEffect, useState } from 'react';
import useInstance from '../../Hooks/useInstance';
import { Link } from 'react-router';
/* -------------------- CONSTANTS -------------------- */
const CATEGORY_COLORS = {
    Dessert: 'bg-pink-100 text-pink-700',
    Pizza: 'bg-orange-100 text-orange-700',
    Burger: 'bg-yellow-100 text-yellow-700',
    Pasta: 'bg-amber-100 text-amber-700',
    Salad: 'bg-green-100 text-green-700',
    Drink: 'bg-blue-100 text-blue-700',
    Default: 'bg-purple-100 text-purple-700',
};

const AVATAR_COLORS = [
    'bg-violet-500', 'bg-rose-500', 'bg-emerald-500',
    'bg-sky-500', 'bg-amber-500', 'bg-fuchsia-500',
];
/* -------------------- SMALL UTILITIES -------------------- */
const getInitials = (email = '') =>
    email.split('@')[0].slice(0, 2).toUpperCase();

const getAvatarColor = (email = '') =>
    AVATAR_COLORS[email.charCodeAt(0) % AVATAR_COLORS.length];

/* -------------------- STAR RATING -------------------- */

const StarRating = ({ rating = 4 }) => (
    <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg
                key={star}
                className={`w-4 h-4 ${star <= rating ? 'text-amber-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

/* -------------------- REVIEW CARD -------------------- */

const ReviewCard = ({ review, index }) => {
    const categoryClass =
        CATEGORY_COLORS[review.category] || CATEGORY_COLORS.Default;

    return (
        <div
            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden group"
            style={{ animationDelay: `${index * 60}ms` }}
        >
            {/* Image */}
            <div className="relative h-44 bg-gray-100 overflow-hidden">
                <img
                    src={review.foodPhoto}
                    alt={review.foodName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) =>
                        (e.target.src = 'https://via.placeholder.com/400x200?text=No+Image')
                    }
                />

                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryClass}`}>
                    {review.category}
                </span>
            </div>

            {/* Body */}
            <div className="p-5">
                <h3 className="font-semibold text-gray-900 truncate">
                    {review.foodName}
                </h3>

                <StarRating rating={4} />

                <div className="border-t my-4 border-gray-100" />

                {/* User */}
                <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(review.foodEmail)}`}>
                        {getInitials(review.foodEmail)}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs text-gray-400">Reviewer</p>
                        <p className="text-sm font-medium text-gray-700 truncate">
                            {review.foodEmail}
                        </p>
                    </div>
                </div>

                {/* Review */}
                {review.addReview && (
                    <div className="bg-gray-50 rounded-xl px-4 py-3">
                        <p className="text-sm text-gray-600 italic line-clamp-3">
                            "{review.addReview}"
                        </p>
                    </div>
                  
                )}
                <div>
                    <Link to={`/favoritesReview/${review._id}`} state={{review}} className='btn btn-ghost'>Favorites Btn</Link>
                </div>
            </div>
        </div>
    );
};

/* -------------------- SKELETON -------------------- */

const SkeletonCard = () => (
    <div className="bg-white rounded-2xl border animate-pulse overflow-hidden">
        <div className="h-44 bg-gray-200" />
        <div className="p-5 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="border-t my-4" />
            <div className="h-14 bg-gray-100 rounded-xl" />
        </div>
    </div>
);

/* -------------------- MAIN COMPONENT -------------------- */

const AllReviews = () => {
    const instance2 = useInstance()

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        instance2('/allReviews')
            .then((res) => setReviews(res.data))
            .finally(() => setLoading(false));
    }, [instance2]);

    const categories = [
        'All',
        ...new Set(reviews.map((r) => r.category).filter(Boolean)),
    ];

    const filtered = reviews.filter((r) => {
        const matchSearch = [r.foodName, r.foodEmail, r.addReview]
            .filter(Boolean)
            .some((field) =>
                field.toLowerCase().includes(search.toLowerCase())
            );

        const matchCategory =
            selectedCategory === 'All' || r.category === selectedCategory;

        return matchSearch && matchCategory;
    });

    return (
        <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-10">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase text-violet-500">
                            Customer Feedback
                        </p>
                        <h1 className="text-3xl font-bold">All Reviews</h1>
                        <p className="text-sm text-gray-500">
                            {loading
                                ? '—'
                                : `${filtered.length} review${filtered.length !== 1 ? 's' : ''}`}
                        </p>
                    </div>

                    {/* Search */}
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search reviews..."
                        className="w-full sm:w-72 px-4 py-2.5 text-sm border rounded-xl focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* Categories */}
                {!loading && categories.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`text-xs px-4 py-1.5 rounded-full border ${selectedCategory === cat
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

            {/* Grid */}
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
                        {filtered.map((review, index) => (
                            <ReviewCard key={review._id} review={review} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default AllReviews;