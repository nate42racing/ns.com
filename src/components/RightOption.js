import { useState, useEffect } from "react";
import { IoChevronForwardOutline } from 'react-icons/io5'


function RightOption({ menu, handlePage, index }) {

    const [nextPage, setNextPage] = useState(menu[index + 1]);

    useEffect(() => {
        setNextPage(menu[index + 1]);
    }, [index, menu]);

    const handleClick = () => {
        handlePage(nextPage);
    };


    return (
        <div className="fixed inset-y-2/4 right-1 text-gray-500 opacity-30 hover:opacity-100 transition duration-500 ease-in-out">
            {(index < Object.keys(menu).length - 1) && (
                <button onClick={handleClick}>
                    <span className="text-9xl">
                        <IoChevronForwardOutline/>
                    </span>
                </button>)}
        </div>
    );
};

export default RightOption;