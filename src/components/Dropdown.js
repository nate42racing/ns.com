import { useState } from "react";
import { MdDensityMedium } from 'react-icons/md';

function Dropdown({ navitems }) {
    const [isOpen, setIsOpen] = useState(false);

    const renderedNavItems = navitems.map((option) => {
        return (
            <div key={option.value}>
                {option.label}
            </div>
        );
    });

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    return (
        <div>
            <MdDensityMedium onClick={handleClick} />
            {isOpen && renderedNavItems}
        </div>
    )
};

export default Dropdown;