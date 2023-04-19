import { useState, useEffect } from "react";


function RightOption({ menu, handlePage, index, handleIndex }) {

    const [nextPage, setNextPage] = useState(menu[index + 1]);
    const [nextPageIndex, setNextPageIndex] = useState(index + 1);

    useEffect(() => {
        setNextPage(menu[index + 1]);
        setNextPageIndex(index + 1);
    }, [index, menu]);

    const handleClick = () => {
        handlePage(nextPage);
    }

    return (
        <div>
            {(index <= Object.keys(menu).length) && <button onClick={handleClick}>Go Forward!</button>}
        </div>
    );
};

export default RightOption;