import { useState, useEffect } from "react";


function LeftOption({ menu, page, handlePage, index }) {
    const [prevPage, setPrevPage] = useState(menu[index - 1])
    const [prevPageIndex, setPrevPageIndex] = useState(index - 1)

    console.log(prevPage)
    console.log(prevPageIndex)

    const handleClick = () => {
        handlePage(prevPage)
        setPrevPageIndex(prevPageIndex - 1)
        setPrevPage(menu[prevPageIndex - 1])
    }

    return (
        <div>
            {(prevPageIndex >= 0) && <button onClick={handleClick}>Go Back!</button>}
        </div>
    );
};

export default LeftOption