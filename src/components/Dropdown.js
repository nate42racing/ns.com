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
            <div className="flex cursor-pointer mt-2" key={option.value}>
                <Link to={option.value} className=" border-4 border-accent text-gray-100 ml-14 rounded-lg mr-14 text-2xl bg-accent-light grow pt-5 pb-5 opacity-100 hover:opacity-80 transition duration-500">{option.label}</Link>
            </div>
        );
    });

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen);
    };

    return (
        <div ref={divEl} className={classes}>
            <MdDensityMedium onClick={handleClick} className="text-6xl cursor-pointer text-accent" />
            <div className="bg-blue-800">
                {isOpen && <div className="absolute w-full left-0 align-center text-center bg-accent-dark py-14">{renderedNavItems}</div>}
            </div>

        </div >
    )
};

export default Dropdown;