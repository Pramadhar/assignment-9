import React from 'react';
import 'animate.css';

const NewBanner = () => {
    return (
        <div className="container mx-auto px-4">
                        <h1 className="animate__animated animate__heartBeat text-3xl mt-6 ">An animated element</h1>
                        <div className='flex flex-col sm:flex-row gap-12 mt-12 my-12' >

<div className='text-center flex-1 sm:order-1'>
  <p className='py-12 sm:py-24 text-lg sm:text-xl'>
      <h2 className='text-2xl mt-2'>Overview of Oceans:</h2>
  Oceans cover about 71% of the Earth's surface and are crucial to sustaining life on our planet. They regulate climate, support marine ecosystems, and play a significant role in the water cycle. There are five main oceans:</p>
</div>
<div className='flex-1 sm:order-2'>
<img className='w-full h-auto rounded-lg' src="https://i.ibb.co.com/59hF0S0/ocean-quotes-index-1624414741.jpg" alt="" />
</div>

</div>
        </div>
       
    );
};

export default NewBanner;