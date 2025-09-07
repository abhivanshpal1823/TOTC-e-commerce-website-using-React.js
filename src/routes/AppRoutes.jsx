import { createBrowserRouter } from "react-router"
import Layout from "../pages/Layout"
import {Home, Course,About_Us,Login,Signup,New_login,StopWatch, BlogPage,MemberShip} from "../pages";

export const AppRoutes = createBrowserRouter([

    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:"/course",
                element:<Course/>

            },
            {
                path:"/blog",
                element:<BlogPage/>

            },
            {

                path:"/about-us",
                element:<About_Us/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            
            {
                path:"/stopwatch",
                element:<StopWatch/>
            },
            {
                path:"/newLogin",
                element:<New_login/>
            },
            {
                path:"/membership",
                element:<MemberShip/>
            }
        ]
       

    },
     {
            path:"/signup",
            element:<Signup/>
        },
])