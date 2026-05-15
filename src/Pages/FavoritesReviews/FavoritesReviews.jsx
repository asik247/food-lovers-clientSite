import React from 'react';
import { useLocation, useParams } from 'react-router';
import useInstance from '../../Hooks/useInstance';

const FavoritesReviews = () => {
    const { id } = useParams()
    const location = useLocation()
    const instance = useInstance()
    // console.log(location.state.review);
    // console.log('favorites id here',id);
    const newFavoritesReviews = {
        userEmail: location.state.review.foodEmail,
        foodId: location.state.review.productId,
        foodName: location.state.review.foodName,
        foodImage: location.state.review.foodPhoto,
        category:location.state.review.category,
        addReview: location.state.review.addReview,
        addedAt: new Date()
    }
    console.log(newFavoritesReviews);
    return (
        <div>
            <p>show your favorites reviews data in late</p>
            {
                instance.post('/favoritesReviewsColl',newFavoritesReviews)
            }
        </div>
    );
};

export default FavoritesReviews;
/**{
    "_id": "6a047e8cfbf1affc29929ef6",
    "productId": "69ff7d49cae9500796bac7cd",
    "foodName": "Tonkotsu Ramen",
    "foodPhoto": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400",
    "foodEmail": "mdasikur5893@gmail.com",
    "category": "Japanese",
    "addReview": "sotty osadraon vai"
} */