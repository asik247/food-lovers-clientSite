import React, { useEffect } from 'react';
import useInstance from '../../Hooks/useInstance';

const FavoritesReviews = () => {
    const instance = useInstance()
    useEffect(()=>{
        instance('/favoritesReviewsColl')
        .then(res=>{
            console.log('all favorites reviews hre',res.data);
        }).catch(eror=>{
            console.log(eror);
        })
    },[instance])
    return (
        <div>
            
        </div>
    );
};

export default FavoritesReviews;