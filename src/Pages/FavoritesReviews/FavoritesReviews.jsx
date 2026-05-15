import React, { useEffect, useState } from 'react';
import useInstance from '../../Hooks/useInstance';
import useAuth from '../../Hooks/useAuth';

const FavoritesReviews = () => {

    const instance = useInstance();
    const { user } = useAuth();

    const [favReviews, setFavReviews] = useState([]);
    const [loading2, setLoading2] = useState(true);

    useEffect(() => {

        if (!user?.email) return;

        instance(`/favoritesReviewsColl?email=${user.email}`)
            .then(res => {
                console.log(res.data);
                setFavReviews(res.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading2(false);
            });

    }, [user, instance]);

    if (loading2) {
        return <p>loading...</p>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                favReviews.map(singleFavReview => (
                    <div
                        key={singleFavReview._id}
                        className='border p-4 rounded-xl shadow'
                    >

                        <img
                            src={singleFavReview.foodImage}
                            alt=""
                            className='w-40 rounded-lg'
                        />

                        <h2 className='text-2xl font-bold'>
                            {singleFavReview.foodName}
                        </h2>

                        <p>{singleFavReview.category}</p>

                        <p>{singleFavReview.addReview}</p>

                    </div>
                ))
            }
        </div>
    );
};

export default FavoritesReviews;