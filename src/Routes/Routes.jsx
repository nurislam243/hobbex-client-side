import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Root from "../Layouts/Root";
import AllGroups from "../pages/Groups/AllGroups";
import GroupDetails from "../pages/GroupDetails/GroupDetails";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import UpdateGroup from "../pages/UpdateGroup/UpdateGroup";
import Register from "../pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyGroups from "../pages/MyGroups/MyGroups";
import NotFound from "../pages/NotFound/NotFound";
import Spinner from "../ui/Spinner/Spinner";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: "/",
            loader: () => fetch('http://localhost:3000/groups'),
            hydrateFallbackElement: <Spinner></Spinner>,
            Component: Home
        },
        {
          path: '/groups',
          loader: () => fetch('http://localhost:3000/groups'),
          hydrateFallbackElement: <Spinner></Spinner>,
          Component: AllGroups
        },
        {
          path: '/group/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/groups/${params.id}`) ,
          hydrateFallbackElement: <Spinner></Spinner>,
          element: <PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>
        },
        {
          path: '/createGroup',
          Component: CreateGroup
        },
        {
          path: '/myGroups',
          loader: () => fetch('http://localhost:3000/groups'),
          hydrateFallbackElement: <Spinner></Spinner>,
          element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>
        },
        {
          path: '/updateGroup/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/groups/${params.id}`) ,
          hydrateFallbackElement: <Spinner></Spinner>,
          element: <PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/registration',
            Component: Register
        },
        
      ]
    },
  ]);