import LeftOption from "./components/LeftOption";
import RightOption from "./components/RightOption";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./components/Dropdown";

function PageTemplate({ children }) {
    const navigate = useNavigate();
    const navitems = [
        { label: 'Home', value: 'home' },
        { label: 'About', value: 'about' },
        { label: 'Work', value: 'work' },
        { label: 'Contact', value: 'contact' },
    ];

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
        <div className="grid grid-cols-6 min-h-screen bg-slate-800">
            <Dropdown className="col-start-6" navitems={navitems} />
            <LeftOption menu={menu} handlePage={handlePage} index={currentIndex} />
            <RightOption menu={menu} handlePage={handlePage} index={currentIndex} />
            <div className="col-start-2 col-span-4 row-start-2">
                {children}
            </div>
        </div>
    );
};

export default PageTemplate;