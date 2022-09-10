import { useRouter } from 'next/router';
import React from 'react';
import { useGetVideoQuery } from '../../features/api/apiSlice';

const VideoDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, isError } = useGetVideoQuery(id);

    
    
console.log(data);


    

    return (
        <>
                   
                   
        </>
    );
};

export default VideoDetails;