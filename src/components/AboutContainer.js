import { GoDeviceDesktop } from 'react-icons/go'
import { AiOutlineDatabase } from 'react-icons/ai'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import React from 'react';


function AboutContainer({ details }) {
    let icon = <GoDeviceDesktop className='text-3xl'/>
    if (details.icon === 'AiOutlineCloudDownload') {
        icon = <AiOutlineCloudDownload className='text-3xl'/>
    };
    if (details.icon === 'AiOutlineDatabase') {
        icon = <AiOutlineDatabase className='text-3xl'/>
    };

    const renderedDev = details.devtools.map((devtool) => {
        return <p className='mt-1'>{devtool}</p>
    });

    return (
        <div className='flex flex-col items-center border p-4 w-72 rounded-3xl'>
            <div className='w-full border-b flex flex-col items-center'>
                {icon}
                <h3 className='text-2xl mt-4 font-bold text-red-700 mb-5'>{details.name}</h3>
                <p className='text-center mb-4'>{details.summary}</p>
            </div>
            <div className='flex flex-col items-center  mt-5'>
                <h4 className='text-md font-semibold mb-4'>Languages I Speak:</h4>
                {details.languages}
                <h4 className='text-md font-semibold mb-2 mt-4'>Dev Tools:</h4>
                {renderedDev}


            </div>
        </div>
    );
};

export default AboutContainer;