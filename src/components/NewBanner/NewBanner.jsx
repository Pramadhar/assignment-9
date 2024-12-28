import React from 'react';
import 'animate.css';

const NewBanner = () => {
    return (
        <div>
                        <h1 class="animate__animated animate__heartBeat text-3xl mt-6 ">An animated element</h1>
                        <div className='flex gap-12 mt-12 my-12' >

<div className='text-center items-center justify-center'>
  <p className='text-center py-24'>
      <h2 className='text-2xl mt-2'>Overview of Oceans:</h2>
  Oceans cover about 71% of the Earth's surface and are crucial to sustaining life on our planet. They regulate climate, support marine ecosystems, and play a significant role in the water cycle. There are five main oceans:</p>
</div>
<div>
<img className='w-full' src="https://i.ibb.co.com/59hF0S0/ocean-quotes-index-1624414741.jpg" alt="" />
</div>

</div>
        </div>
       
    );
};

export default NewBanner;