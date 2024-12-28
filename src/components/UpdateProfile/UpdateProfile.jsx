import React, { useState, useContext } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink } from 'react-router-dom';

const UpdateProfile = () => {
  const { user, manageProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [image, setImage] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    manageProfile(name, image); 
  };

  return (
    <div>
      <h2>Update Your Profile</h2>
      <input name
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 

      />
      <input 
        type="text" 
        value={image} 
        onChange={(e) => setImage(e.target.value)} 
        placeholder="Enter image URL" 
      />
      <button onClick={handleUpdate}>Update</button>
      <br />
      <NavLink  to="/" >go back</NavLink>
    </div>
  );
};

export default UpdateProfile;
