import LeftOption from "./components/LeftOption";
import RightOption from "./components/RightOption";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function PageTemplate({ children }) {
    const navigate = useNavigate();
    const menu = {
        0: '/',
        1: '/about',
        2: '/work',
        3: '/contact',
    };

    const pageToIndex = Object.keys(menu).reduce((acc, key) => {
        acc[menu[key]] = Number(key);
        return acc;
    }, {});

    // ...

    const findIndex = useCallback((page) => {
        return pageToIndex[page] ?? null; // Use null if page is not found
    }, []);


    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [currentIndex, setCurrentIndex] = useState(findIndex(currentPage))
    console.log(currentIndex)

    useEffect(() => {
        setCurrentIndex(findIndex(currentPage))
    }, [currentPage, findIndex]);

    const handlePage = (newPage) => {
        setCurrentPage(newPage);
        setCurrentIndex(prevIndex => findIndex(newPage)); // Update using functional update form
        navigate(newPage);
    };

    return (
        <div>
            <LeftOption menu={menu} handlePage={handlePage} index={currentIndex} />
            {children}
            <RightOption menu={menu} handlePage={handlePage} index={currentIndex} />
        </div>
    );
};

export default PageTemplate;