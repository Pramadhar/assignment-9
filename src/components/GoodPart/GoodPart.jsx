import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GoodPart = ({good}) => {
    const {goodPart,conservationEfforts,badPart} = good
    // console.log(good)
  
    return (
        <div className="card bg-blue-400 text-primary-content mb-12 px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="card-body">
    <h2 className="card-title"> GoodPart:{goodPart}</h2>
    <h2 className="card-title">Badpart: {badPart}</h2>


   
  </div>
</div>
    );
};

export default GoodPart;