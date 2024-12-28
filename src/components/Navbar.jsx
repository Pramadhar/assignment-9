import React, { useContext } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import userIcon from '../assets/userIcon.png'
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, signout } = useContext(AuthContext)
    return (
        <div className='flex justify-between items-start text-center '>
            <div>
                <h2 className='text-2xl'>Ocean Dives</h2>

            </div>
            <div className='space-x-3'>
                <NavLink to="/">home</NavLink>
                <NavLink to="/Updateprofile">Update Profile</NavLink>
                <NavLink to="/userProfile">User Profile</NavLink>
            </div>
            <div className='space-x-3 flex items-center'>
                <div>
                    {
                        user && user?.email ? (<div> <img className="w-12 rounded-full" src={user?.photoURL } alt="" /> </div>) : (<img className='w-12' src={userIcon} alt="" />)
                    }
                </div>

                {
                    user && user ? (<button onClick={signout} >logout</button>) : (< NavLink to="/login">  <button className='btn bg-blue-400 px-4 py-3 rounded-md text-white'>login</button></NavLink>)
                }



            </div>
        </div>
    );
};

export default Navbar;