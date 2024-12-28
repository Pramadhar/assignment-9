import React from 'react';
import { NavLink } from 'react-router-dom';

const OceneCard = ({ocean }) => {
const {image,adventureTitle,categoryName,ecoFriendlyFeatures,id } = ocean ;
    return (
        <div className="card bg-base-100 shadow-xl items-center">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
         <p>{categoryName}</p>
          <p>{adventureTitle}</p>
          {
            ecoFriendlyFeatures.map (feature => <li>{feature}</li>)
          }
          <div className="card-actions justify-center">
            <NavLink to={`/details/${id}`}> <button className='bg-blue-400 text-white px-3 py-2 rounded-md'>Explore more</button></NavLink>
         
          </div>
        </div>
      </div>
    );
};

export default OceneCard;