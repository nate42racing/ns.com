import { useState, useEffect } from "react";


function LeftOption({ menu, handlePage, index, handleIndex }) {
    const [prevPage, setPrevPage] = useState(menu[index - 1])
    const [prevPageIndex, setPrevPageIndex] = useState(index - 1)

    useEffect(() => {
        setPrevPage(menu[index + 1]);
        setPrevPageIndex(index + 1);
    }, [index, menu]);

    const handleClick = () => {
        handlePage(prevPage)
    }

    return (
        <div>
            {(index > 0) && <button onClick={handleClick}>Go Back!</button>}
        </div>
    );
};

export default LeftOption