import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Register/Register";
import Root from "../Layouts/Root";
import AllGroups from "../pages/Groups/AllGroups";
import GroupDetails from "../pages/GroupDetails/GroupDetails";
import CreateGroup from "../pages/CreateGroup/CreateGroup";
import UpdateGroup from "../pages/UpdateGroup/UpdateGroup";
import MyGroups from "../pages/MyGroups/MyGroups";
import Register from "../pages/Register/Register";

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
          path: '/allGroups',
          Component: AllGroups
        },
        {
          path: '/groupDetails',
          Component: GroupDetails
        },
        {
          path: '/createGroup',
          Component: CreateGroup
        },
        {
          path: '/myGroups',
          Component: MyGroups
        },
        {
          path: '/updateGroup',
          Component: UpdateGroup
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