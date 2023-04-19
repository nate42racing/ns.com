import { useState, useEffect } from "react";
import { GoChevronLeft } from "react-icons/go";


function LeftOption({ menu, handlePage, index, handleIndex }) {
    const [prevPage, setPrevPage] = useState(menu[index - 1])
    const [prevPageIndex, setPrevPageIndex] = useState(index - 1)

    useEffect(() => {
        setPrevPage(menu[index - 1]);
        setPrevPageIndex(index - 1);
    }, [index, menu]);

    const handleClick = () => {
        handlePage(prevPage)
    }

    return (
        <div className="fixed inset-y-2/4 left-4">
            {(index > 0) && (
                <button onClick={handleClick}>
                    <span className="text-8xl">
                        <GoChevronLeft />
                    </span>
                </button>
            )};
        </div>
    );
};

export default LeftOption