import { GoDeviceDesktop } from 'react-icons/go'
import { AiOutlineDatabase } from 'react-icons/ai'
import { AiOutlineCloudDownload } from 'react-icons/ai';
import React from 'react';


function AboutContainer({ details }) {
    let icon = <GoDeviceDesktop />
    if (details.icon === 'AiOutlineCloudDownload') {
        icon = <AiOutlineCloudDownload />
    };
    if (details.icon === 'AiOutlineDatabase') {
        icon = <AiOutlineDatabase />
    };

    return (
        <div>
            {icon}
            <h3>{details.name}</h3>
        </div>
    );
};

export default AboutContainer;