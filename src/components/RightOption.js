import { useState, useEffect } from "react";
import { IoChevronForwardOutline } from 'react-icons/io5'


function RightOption({ menu, handlePage, index }) {

    const [nextPage, setNextPage] = useState(menu[index + 1]);

    useEffect(() => {
        setNextPage(menu[index + 1]);
    }, [index]);

    const handleClick = () => {
        handlePage(nextPage);
    }


    return (
        <div className="fixed inset-y-2/4 right-4">
            {(index < Object.keys(menu).length - 1) && (
                <button onClick={handleClick}>
                    <span className="text-8xl">
                        <IoChevronForwardOutline />
                    </span>
                </button>)}
        </div>
    );
};

export default RightOption;