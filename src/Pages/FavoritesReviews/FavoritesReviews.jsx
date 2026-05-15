import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import useInstance from '../../Hooks/useInstance';

const FavoritesReviews = () => {

    const location = useLocation();
    const instance = useInstance();

    const review = location.state.review;

    useEffect(() => {

        const newFavoritesReviews = {
            userEmail: review.foodEmail,
            foodId: review.productId,
            foodName: review.foodName,
            foodImage: review.foodPhoto,
            category: review.category,
            addReview: review.addReview,
            addedAt: new Date()
        };

        instance.post('/favoritesReviewsColl', newFavoritesReviews)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }, [instance, review]);

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <h1 className='text-2xl font-bold'>
                Favorites Added Successfully
            </h1>
        </div>
    );
};

export default FavoritesReviews;