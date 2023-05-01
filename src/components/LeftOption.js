import { useState, useEffect } from "react";
import { IoChevronBackOutline } from 'react-icons/io5'
import useMedia from "../useMedia";


function LeftOption({ menu, handlePage, index, handleIndex }) {
    const [prevPage, setPrevPage] = useState(menu[index - 1])

    useEffect(() => {
        setPrevPage(menu[index - 1]);
    }, [index, menu]);

    const handleClick = () => {
        handlePage(prevPage)
    };

    const isSmallScreen = useMedia("(max-width: 640px)");

    return (
        <div className="z-10 fixed inset-y-2/4 left-1 text-gray-500 opacity-30 hover:opacity-100 transition duration-500 ease-in-out">
            {(index > 0) && !isSmallScreen && (
                <button onClick={handleClick}>
                    <span className="text-9xl">
                        <IoChevronBackOutline />
                    </span>
                </button>
            )}
        </div>
    );
};

export default LeftOption