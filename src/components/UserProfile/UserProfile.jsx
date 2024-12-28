
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const UserProfile = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate()
  const handlerUpdate =() => {
    navigate('/updateProfile')
  }
  return (
    <div className="">
      {user ? (
        <div >
           <h2 className="text-3xl font-semibold">
            Welcome {user.displayName || "User"}!
          </h2>
          <div className="items-center justify-center">
          <img
                src={user.photoURL }
                alt="User"
                className="w-32 h-32 rounded-full center "
              />

          </div>
         

          <p><strong>Name:</strong> {user.displayName || "No name set"}</p>

          <p> <strong> Email:</strong> {user.email  || "No email set"}</p>
   
        </div>
      ) : (
        <p>No user logged in</p> 
    
      )
    
      
      }
        <button onClick={handlerUpdate} className="bg-blue-400 mt-4 text-white px-4 py-2 rounded-md ">update Button </button>
    </div>
  );
};

export default UserProfile;

