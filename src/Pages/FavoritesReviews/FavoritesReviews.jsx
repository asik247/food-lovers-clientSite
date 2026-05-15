import React, { useEffect, useState } from 'react';
import useInstance from '../../Hooks/useInstance';
import useAuth from '../../Hooks/useAuth';

const FavoritesReviews = () => {
    const instance = useInstance()
    const { user } = useAuth()
    const [favReviews, setFavReviews] = useState([])
    const [loading2, setLoading2] = useState(true);
    useEffect(() => {
        instance(`/favoritesReviewsColl?email=${user.email}`)
            .then(res => {
                console.log('all favorites reviews hre', res.data);
                setFavReviews(res.data)
                setLoading2(false)
            }).catch(eror => {
                console.log(eror);
            })
    }, [user, instance])
    return (
        <div>
            {
                loading2 ? (<p>loading...</p>) : (
                    favReviews.map(singleFavReview => <div key={singleFavReview._id}>
                        <p>{singleFavReview.foodName}</p>
                    </div>)
                )
            }

        </div>
    );
};

export default FavoritesReviews;
/** {
    "_id": "6a06a409122b0e97d07c4f0c",
    "userEmail": "mdasikur5893@gmail.com",
    "foodId": "69ff7d49cae9500796bac7ce",
    "foodName": "Peking Duck",
    "foodImage": "https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=400",
    "category": "Chinese",
    "addReview": "most femouse vegatable",
    "addedAt": "2026-05-15T04:41:45.261Z"
  }, */