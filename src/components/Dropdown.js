import { useState } from "react";
import { MdDensityMedium } from 'react-icons/md';
import classNames from 'classnames';

function Dropdown({ navitems, className }) {
    const [isOpen, setIsOpen] = useState(false);

    const classes = classNames(className)

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
        <div className={classes}>
            <MdDensityMedium onClick={handleClick} className="text-6xl" />
            {isOpen && <div className="absolute w-full left-0">{renderedNavItems}</div>}
        </div >
    )
};

export default Dropdown;