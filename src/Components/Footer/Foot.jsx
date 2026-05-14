import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { GiHotMeal } from 'react-icons/gi';

const Foot = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">

            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-3 mb-4">

                        {/* Food Logo */}
                        <div className="bg-violet-600 p-3 rounded-full text-white text-2xl">
                            <GiHotMeal />
                        </div>

                        <h2 className="text-2xl font-bold text-white">
                            Food Lover
                        </h2>
                    </div>

                    <p className="text-sm leading-6">
                        Discover delicious foods, share honest reviews,
                        and explore the best restaurants around you.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3">

                        <Link
                            to="/"
                            className="hover:text-violet-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/allReviews"
                            className="hover:text-violet-400 transition"
                        >
                            All Reviews
                        </Link>

                        <Link
                            to="/addReview"
                            className="hover:text-violet-400 transition"
                        >
                            Add Review
                        </Link>

                        <Link
                            to="/myReviews"
                            className="hover:text-violet-400 transition"
                        >
                            My Reviews
                        </Link>

                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Follow Us
                    </h3>

                    <div className="flex gap-4">

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 hover:bg-violet-600 p-3 rounded-full transition text-white"
                        >
                            <FaFacebookF />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 hover:bg-violet-600 p-3 rounded-full transition text-white"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 hover:bg-violet-600 p-3 rounded-full transition text-white"
                        >
                            <FaTwitter />
                        </a>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 hover:bg-violet-600 p-3 rounded-full transition text-white"
                        >
                            <FaYoutube />
                        </a>

                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">

                © 2026 Food Lover. All rights reserved.

            </div>

        </footer>
    );
};

export default Foot;