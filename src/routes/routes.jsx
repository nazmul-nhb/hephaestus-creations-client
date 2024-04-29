import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AddArts from "../pages/AddArts/AddArts";
import PrivateRoute from "./PrivateRoute";
import ArtDetails from "../pages/ArtDetails/ArtDetails";
import AllArts from "../pages/AllArts/AllArts";
import MyArts from "../pages/MyArts/MyArts";
import Profile from "../pages/Profile/Profile";
import CategoryDetails from "../pages/CategoryDetails/CategoryDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add-arts',
                element: <PrivateRoute><AddArts></AddArts></PrivateRoute>
            },
            {
                path: '/all-arts',
                element: <AllArts></AllArts>,
                loader: () => fetch('https://hephaestus-creations-server.vercel.app/arts')
            },
            {
                path: '/my-arts',
                element: <PrivateRoute><MyArts></MyArts></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ArtDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hephaestus-creations-server.vercel.app/arts/id/${params.id}`)
            },
            {
                path: '/category-details/:id',
                element: <CategoryDetails />,
                loader: ({ params }) => fetch(`https://hephaestus-creations-server.vercel.app/categories/id/${params.id}`)
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
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ],
    },
]);