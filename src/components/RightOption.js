import { useState, useEffect } from "react";


function RightOption({ menu, page, handlePage, index }) {
    const [nextPage, setnextPage] = useState(menu[index + 1])
    const [nextPageIndex, setnextPageIndex] = useState(index + 1)

    console.log(nextPage)
    console.log(nextPageIndex)

    const handleClick = () => {
        handlePage(nextPage)
        setnextPageIndex(nextPageIndex + 1)
        setnextPage(menu[nextPageIndex + 1])
    }

    return (
        <div>
            {(nextPageIndex < Object.keys(menu).length - 1) && <button onClick={handleClick}>Go Back!</button>}
        </div>
    );
};

export default RightOption