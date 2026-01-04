import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Auth/Register.jsx";
import Login from "../pages/Auth/Login.jsx";
import AllArtworks from "../pages/AllArtworks/AllArtworks.jsx";
import ArtworkDetails from "../components/ArtworkDetails.jsx";
import PrivateRouts from "./PrivateRouts.jsx";
import AddArtWorks from "../pages/AddArtWorks.jsx/AddArtWorks.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx";
import Update from "../pages/Gallery/Update.jsx";
import Error from "../components/Error.jsx";
import Dashboard from "../layouts/Dashboard.jsx";
import Overview from "../pages/Dashboard/Overview.jsx";
import About from "../pages/About/About.jsx";
import ContractUs from "../pages/Contract/ContractUs.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-artworks",
        element: <AllArtworks></AllArtworks>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/art-details/:id",
        element: <ArtworkDetails></ArtworkDetails>,
      },
      {
        path: "/add-artworks",
        element: (
          <PrivateRouts>
            <AddArtWorks></AddArtWorks>
          </PrivateRouts>
        ),
      },
      {
        path: "/favorites",
        element: (
          <PrivateRouts>
            <Favorites></Favorites>
          </PrivateRouts>
        ),
      },
      {
        path: "/my-gallary",
        element: (
          <PrivateRouts>
            <Gallery></Gallery>
          </PrivateRouts>
        ),
      },
      {
        path: "/contract",
        element: <ContractUs></ContractUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRouts><Dashboard /></PrivateRouts>,
    children: [
      {
        index: true,
        element: <Overview></Overview>,
      },
      {
        path: "/dashboard/add-artworks",
        element: (
          <PrivateRouts>
            <AddArtWorks />
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <PrivateRouts>
            <Update></Update>
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/my-gallery",
        element: (
          <PrivateRouts>
            <Gallery />
          </PrivateRouts>
        ),
      },
      {
        path: "/dashboard/favorites",
        element: (
          <PrivateRouts>
            <Favorites />
          </PrivateRouts>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);
