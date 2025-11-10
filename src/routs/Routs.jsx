import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Register from '../pages/Auth/Register.jsx';
import Login from '../pages/Auth/Login.jsx';
import AllArtworks from '../pages/AllArtworks/AllArtworks.jsx';
import ArtworkDetails from '../components/ArtworkDetails.jsx';
import PrivateRouts from './PrivateRouts.jsx';
import AddArtWorks from '../pages/AddArtWorks.jsx/AddArtWorks.jsx';
import Favorites from '../pages/Favorites/Favorites.jsx';
import Gallery from '../pages/Gallery/Gallery.jsx';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/all-artworks',
                element: <PrivateRouts><AllArtworks></AllArtworks></PrivateRouts>
            },
            {
                path: '/art-details/:id',
                element: <PrivateRouts><ArtworkDetails></ArtworkDetails></PrivateRouts>
            },
            {
                path: '/add-artworks',
                element: <AddArtWorks></AddArtWorks>
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            {
                path: '/my-gallary',
                element: <PrivateRouts><Gallery></Gallery></PrivateRouts>

            }
        ]   
    },

]);