import { useState, useEffect } from "react";


function RightOption({ menu, handlePage, index }) {

    const [nextPage, setNextPage] = useState(menu[index + 1]);

    useEffect(() => {
        setNextPage(menu[index + 1]);
    }, [index]);

    const handleClick = () => {
        handlePage(nextPage);
    }


    return (
        <div>
            {(index < Object.keys(menu).length - 1) && <button onClick={handleClick}>Go Forward!</button>}
        </div>
    );
};

export default RightOption;