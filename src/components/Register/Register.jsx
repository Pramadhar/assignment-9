import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = () => {
    const {registerLogin, manageProfile}= useContext(AuthContext)
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handlerRegister = e=> {
        e.preventDefault()
        
        // console.log(name, imageurl, email, password);
        const form = new FormData(e.target)
        const name = form.get("name")
        const image = form.get("image")
        const email = form.get("email")
        const password = form.get("password")
        if(password.length <6 ){
            alert('must use 6 character')
        }
        if (!/[a-z]/.test(password)) {
          setError("Password must contain at least one lowercase letter");
          return;
        }
        
        if (!/[A-Z]/.test(password)) {
          setError("Password must contain at least one uppercase letter");
          return;
        }
        // console.log(name,image,email,password)
        registerLogin(email,password)

 .then(res => {
    // console.log(res.user)
    manageProfile({displayName : name ,photoURL: image})
    .then(()=> {
navigate('/')
    })
    .catch((err)=> {
      console.log(err)
    })
 })
 .catch(err => {
    console.log(err.message)
 })
 .then(res => {
  manageProfile(name,image)
 })
    }
    return (
        <div className="card bg-base-100 mt-6 w-full  mx-auto max-w-md shrink-0 shadow-2xl">
        <form onSubmit={handlerRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name ="name" type="text" placeholder="name" className="input input-bordered"  />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">imageUrL</span>
            </label>
            <input name='image' type="text" placeholder="image" className="input input-bordered"  />
          </div>
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
            <button type="submit"  className="btn btn-primary">register</button>
          </div>
          <h2>Already have an account? please <NavLink className="underline" to="/login">Login</NavLink></h2>
          {
            error && <p className='text-red-400'>{error}</p>
          }
        </form>
      </div>
    );
};

export default Register;