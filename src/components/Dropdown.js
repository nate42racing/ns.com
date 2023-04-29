import { useState, useEffect, useRef } from "react";
import { FiMenu } from 'react-icons/fi';
import classNames from 'classnames';
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function Dropdown({ navitems, className, handlePage }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    const props = useSpring({opacity: isOpen ? 1 : 0})

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


    const classes = classNames(className ,'"font-sans font-family:"Noto Sans"')

    const renderedNavItems = navitems.map((option) => {
        return (
            <div className="flex items-center justify-items-start gap-2 cursor-pointer first:mt-0 border-b hover:opacity-60 hover:bg-slate-100" key={option.value}>
                <FiMenu className="text-black ml-4 text-2xl hover:rotate-180"/>
                <Link to={option.value} onClick = {() => handlePage(option.value)} className="text-slate-500 font-bold rounded-lg text-2xl py-3 transition duration-500">{option.label}</Link>
            </div>
        );
    });

    const handleClick = () => {
        setIsOpen((isOpen) => !isOpen);
    };

    return (
        <div ref={divEl} className={classes}>
            <FiMenu className="text-6xl cursor-pointer text-red-700" onClick={handleClick}/>
            
            {isOpen && (
                <animated.div style={props} className="rounded-xl absolute bg-gray-50 border shadow-md w-1/5 top-full right-0 align-center text-center mr-4">
                    {renderedNavItems}
                </animated.div>
            )}
            

        </div >
    )
};

export default Dropdown;