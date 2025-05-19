import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import About from "../About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Sign Up/SignUp";
import Root from "../Layouts/Root";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
            path: "/",
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/signup',
            Component: SignUp
        },
        
      ]
    },
  ]);