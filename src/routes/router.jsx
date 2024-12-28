import { createBrowserRouter, NavLink } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Details from "../components/Details/Details";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import GoodPart from "../components/GoodPart/GoodPart";
import UserProfile from "../components/UserProfile/UserProfile";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Footer from "../components/Footer";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout> </MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader:  async() =>{
                    const oceanres = await fetch ('/ocean.json')
                    const oceanData =  await oceanres.json()
                    const goodPartRes = await fetch('goodPart.json')
                    const goodPartData = await goodPartRes.json()
                    return {oceanData, goodPartData}
                }
                  
                
            },
   
  
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/details/:id",
                element: <PrivateRoute> <Details></Details></PrivateRoute>,
                loader: async ({ params }) => {
                    const res = await fetch("/ocean.json")
                    const data = await res.json()
                    console.log(data ,params.id)
                    const singleData = data.find(d => d.id === parseInt( params.id))
                    return singleData;
                }

            }

        ],
        
    
    },
    {
path : "/userprofile",
element : <PrivateRoute> <UserProfile></UserProfile></PrivateRoute>
    },
{
    path: "/updateProfile",
    element : <UpdateProfile></UpdateProfile>
}
,
    {
path : "*",
element : <button>a Not Found Page <br /> <NavLink className="btn bg-blue-400 text-white" to="/"> go back</NavLink> </button>

    }
])