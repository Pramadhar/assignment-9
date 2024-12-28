import React from 'react';
import Banner from '../Banner';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto py-2 '>
            <Navbar></Navbar>
            </section>
          {/* <section className='w-full mx-auto mt-3 pl-6 pr-6'>
        
          </section> */}
            
            <Outlet></Outlet>
          
   <Footer className="w-full mx-0 px-12 mt-12 " ></Footer>
            
        </div>
    );
};

export default MainLayout;