import { useState, useEffect, useRef } from "react";
import { MdDensityMedium } from 'react-icons/md';
import classNames from 'classnames';
import { Link } from "react-router-dom";

function Dropdown({ navitems, className }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

    const classes = classNames(className)

    const renderedNavItems = navitems.map((option) => {
        return (
            <div key={option.value}>
                <Link to={option.value}>{option.label}</Link>
            </div>
        );
    });

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    return (
        <div className={classes}>
            <MdDensityMedium onClick={handleClick} className="text-6xl" />
            {isOpen && <div className="absolute w-full left-0 align-center text-center">{renderedNavItems}</div>}
        </div >
    )
};

export default Dropdown;