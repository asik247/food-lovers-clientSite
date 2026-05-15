import React, { useEffect } from 'react';
import useInstance from '../../Hooks/useInstance';
import useAuth from '../../Hooks/useAuth';

const FavoritesReviews = () => {
    const instance = useInstance()
    const {user} = useAuth()
    useEffect(()=>{
        instance(`/favoritesReviewsColl?email=${user.email}`)
        .then(res=>{
            console.log('all favorites reviews hre',res.data);
        }).catch(eror=>{
            console.log(eror);
        })
    },[user,instance])
    return (
        <div>
            
        </div>
    );
};

export default FavoritesReviews;