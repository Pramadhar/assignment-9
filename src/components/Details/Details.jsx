import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const detail = useLoaderData()
    const [modal, setModal] = useState(false)
    if (!detail) {
        return <div>Details not found. Please check the URL or try again later.</div>;
    }
    const { image, adventureTitle, adventureLevel } = detail;
    console.log(detail)

    const currentTime = new Date()
    const currentHour = currentTime.getHours()
    const isDayTime = currentHour >= 10 && currentHour < 20;
    const handlerTalkToExpert = () => {
        if (isDayTime) {
            window.open("https://meet.google.com/your-meeting-link", "_blank")
        }
        else {
            setModal(true)
        }
      
    }
    const handlerModal = () => {
        setModal(false)
    }
    
    return (
        <div>
            <div
                className="hero min-h-[500px]"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{adventureLevel}</h1>
                        <p className="mb-5">
                            {adventureTitle}
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={handlerTalkToExpert} className='btn bg-white text-blue-400  mt-3'>Talk to expert</button>

            {modal && (
                <div className=''>
                   
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Our consultation hours are between 10 AM and 2 PM.</p>
                        <div className="modal-action">
                          
                                {/* if there is a button in form, it will close the modal */}
                                <button onClick={handlerModal} className="btn">Close</button>
                            
                        </div>
                    </div>
                   
                </div>
               
            )}

        </div>
    );
};

export default Details;