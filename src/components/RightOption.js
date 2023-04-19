import { useState, useEffect } from "react";


function RightOption({ menu, page, handlePage, index }) {

    console.log(index + 1)
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
            {(nextPageIndex < Object.keys(menu).length) && <button onClick={handleClick}>Go Forward!</button>}
        </div>
    );
};

export default RightOption