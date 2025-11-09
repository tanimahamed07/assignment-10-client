import React, { useEffect, useState } from 'react';
import { useAxios } from '../../hook/useAxios';
import CommunityHighlights from './CommunityHighlights';
import TopArtist from './TopArtist';
import { BiSolidLike } from 'react-icons/bi';
import { Link } from 'react-router';
import ArtsCard from '../../components/ArtsCard';

const FeaturedArtworks = () => {
    const axiosInstance = useAxios();
    const [artworks, setArtworks] = useState([]);
    useEffect(() => {
        axiosInstance.get('/latest-artworks')
            .then(res => {
                console.log(res.data.result)
                setArtworks(res.data.result)
            })
            .catch(err => console.error(err));
    }, [axiosInstance]);

    return (
        <div className="container mx-auto p-4 space-y-12">
            <section>
                <h2 className="text-3xl font-bold mb-6">Featured Artworks</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {artworks.map((art) => (
                        <ArtsCard art={art}></ArtsCard>
                        
                    ))}
                </div>
            </section>
            <TopArtist></TopArtist>
            <CommunityHighlights></CommunityHighlights>
        </div>
    );
};

export default FeaturedArtworks;