import React from 'react';
import { useLoaderData } from 'react-router-dom';
import OceneCard from '../oceanCard/OceneCard';
import Banner from '../Banner';
import GoodPart from '../GoodPart/GoodPart';
import NewBanner from '../NewBanner/NewBanner';

const Home = () => {
    const {oceanData, goodPartData} = useLoaderData()

    // console.log(oceanData,goodPartData)
    return (
        <div>
              <Banner></Banner>
              <NewBanner></NewBanner>
            
         <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
         {
               oceanData.map (ocean => <OceneCard ocean={ocean} ></OceneCard>)
            }
         </div>
       
         <div className = "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
         {
        goodPartData.map (good => <GoodPart good={good}></GoodPart>)
       }
         </div>
     
        </div>

    );
};

export default Home;