import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate, useParams } from 'react-router';
import useInstance from '../../Hooks/useInstance';

const UpdateMyReviews = () => {
    const {id} = useParams()
    const location = useLocation();
    const instance = useInstance()
    const Previsousreview = location.state?.review || {};
    const navegate = useNavigate()
    // console.log(Previsousreview.addReview);
   const {user} = useAuth()

   
    const handleSubmit = (e) => {
        const updateReviewValue = e.target.updateReview.value;
        console.log(updateReviewValue);
        e.preventDefault();
        // console.log('id',id);
        instance.patch(`/allReviews/${id}`,{
            addReview:updateReviewValue
        })
        .then(res=>{
            // console.log(res.data);
            if(res.data.modifiedCount>0){
                  alert("Review updated successfully");
                  navegate('/myReviews')
                  
            }
        })
        // const loca
        

       

        // এখানে API call করবে (PATCH request)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-5"
            >

                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Update Review
                </h2>

                {/* User Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        User Name
                    </label>
                    <input
                        type="text"
                        name="userName"
                        readOnly
                        defaultValue={user?.displayName}
                        placeholder="Enter your name"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                         readOnly
                        defaultValue={user?.email}
                        placeholder="Enter your email"
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* Review */}
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Update Review
                    </label>
                    <textarea
                        name="updateReview"
                        defaultValue={Previsousreview.addReview}
                        rows="5"
                        placeholder="Write your updated review..."
                        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 rounded-lg transition"
                >
                    Update Review
                </button>

            </form>
        </div>
    );
};

export default UpdateMyReviews;