import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";

import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import Payment from "../pages/Dashboard/MySelectedClasses/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/MySelectedClasses/Payment/PaymentHistory";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import MyEnrollClasses from "../pages/MyEnroll/MyEnrollClasses";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Users/Classes";
import Instructor from "../pages/Users/Instructor";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'instructor',
                element: <Instructor></Instructor>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'addAClass',
                element: <AddAClass></AddAClass>
            },
            {
                path: 'myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'mySelectedClasses',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'payment/:id',
                element: <Payment />
            },
            {
                path: 'myEnrollClass',
                element: <MyEnrollClasses></MyEnrollClasses>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }

        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    },
]);