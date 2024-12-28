import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
    const contextValue = useContext(AuthContext)
    const [error,setError] = useState('')
    const {signIn,googleSignIn,signout} = contextValue
    console.log(contextValue)
    const handlerLogin = e => {
        e.preventDefault ()
        const form = new FormData(e.target)
        // const email =e.email.target.value
        // const password =e.password.target.value
        const email = form.get("email")
        const password = form.get("password")
     console.log(email,password)
     signIn(email,password)
     .then(res => {
        console.log('Logged in successfully:', res.user);
        navigate('/')
        setError("")
    })
    .catch(err => {
        console.log('Error logging in:', err.message);
        setError(err.message)
    });
    }
    return (
        <div className="card bg-base-100 mt-6 w-full  mx-auto max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handlerLogin} className="card-body">
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">login</button>
          </div>
          <h2 onClick={googleSignIn}>googleSignIn</h2>
       
          <h2>Doesnt havent accout please <NavLink className="underline" to="/register">register</NavLink></h2>
        </form>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    );
};

export default Login;