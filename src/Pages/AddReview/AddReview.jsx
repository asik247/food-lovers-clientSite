import React from "react";
import useForm from "../../Hooks/useForm";
import useAuth from "../../Hooks/useAuth";
import useSecure2 from "../../Hooks/useSecure2";
import Swal from "sweetalert2";

const AddReview = () => {
    const { user } = useAuth()
    const instance = useSecure2();
    const [foodName, handleFoodName] = useForm('')
    const [foodURL, handleFoodURL] = useForm('')
    const [resturentName, handleResturentName] = useForm('')
    const [location, handleLocation] = useForm('')
    const [reviewText, handleReviewText] = useForm('')
    const submitReviews = (e) => {
        e.preventDefault();
        const createData = { foodName, foodURL, resturentName, location, reviewText, userEmail: user?.email, createAT: new Date() }
        // console.log(createData);
        instance.post('/creatNewFood', createData)
            .then(res => {
                console.log('after create food', res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been post",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <div className="w-full max-w-lg bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-8 border border-gray-200">

                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
                    Add Review
                </h2>

                <form onSubmit={submitReviews} className="space-y-4">

                    {/* Food Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Food Name
                        </label>
                        <input
                            type="text"
                            name="foodName"
                            value={foodName}
                            onChange={handleFoodName}
                            placeholder="Enter food name"
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    {/* Food Image */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Food Image URL
                        </label>
                        <input
                            type="text"
                            name="foodImage"
                            value={foodURL}
                            onChange={handleFoodURL}
                            placeholder="Paste image URL"
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Restaurant Name */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Restaurant Name
                        </label>
                        <input
                            type="text"
                            name="restaurantName"
                            value={resturentName}
                            onChange={handleResturentName}
                            placeholder="Restaurant name"
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={handleLocation}
                            placeholder="Restaurant location"
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Star Rating
                        </label>
                        <select
                            name="rating"
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="1">⭐ 1 Star</option>
                            <option value="2">⭐⭐ 2 Stars</option>
                            <option value="3">⭐⭐⭐ 3 Stars</option>
                            <option value="4">⭐⭐⭐⭐ 4 Stars</option>
                            <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
                        </select>
                    </div>

                    {/* Review Text */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Review Text
                        </label>
                        <textarea
                            name="reviewText"
                            value={reviewText}
                            onChange={handleReviewText}
                            rows="3"
                            placeholder="Write your review..."
                            className="w-full mt-1 px-3 py-2 text-sm sm:text-base border rounded-lg 
                            bg-gradient-to-r from-gray-50 to-white 
                            focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-lg text-white font-semibold 
                        bg-gradient-to-r from-blue-500 to-indigo-600 
                        hover:from-blue-600 hover:to-indigo-700 
                        transition duration-200"
                    >
                        Submit Review
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddReview;