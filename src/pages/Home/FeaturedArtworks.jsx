import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hook/useAxios';
import CommunityHighlights from './CommunityHighlights';
import TopArtist from './TopArtist';
import ArtsCard from '../../components/ArtsCard';
import Loader from '../../components/Loader';

const FeaturedArtworks = () => {
    const axiosInstance = useAxios();
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        axiosInstance.get('/latest-artworks')
            .then(res => {
                setArtworks(res.data.result)
                setLoading(false)
            })
            .catch(err => console.error(err));
    }, [axiosInstance]);
    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className="container mx-auto p-4 space-y-12">
            <section>
                <h2 className="text-3xl font-bold mb-6">Featured Artworks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artworks.map((art) => (
                        <ArtsCard key={art._id} art={art}></ArtsCard>
                    ))}
                </div>
            </section>
            <TopArtist></TopArtist>
            <CommunityHighlights></CommunityHighlights>
        </div>
    );
};

export default FeaturedArtworks;