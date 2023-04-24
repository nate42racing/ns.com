import LeftOption from "./components/LeftOption";
import RightOption from "./components/RightOption";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function PageTemplate({ children }) {
    const navigate = useNavigate();
    const navitems = [
        { label: 'Home', value: '/' },
        { label: 'About', value: '/about' },
        { label: 'Work', value: '/work' },
        { label: 'Contact', value: '/contact' },
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
        <div className=" min-h-screen bg-background">

            <div className="grid grid-cols-6 bg-cover bg-hero h-screen -z-40 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-slate-50 before:opacity-80 before:z-0" >

                <Header className="flex sticky top-0 z-50 items-center justify-between h-20 col-start-1 col-span-6 bg-white" logoPath={"/ns_logo.png"}>
                    <div>
                        <Dropdown className="mr-5" navitems={navitems} />           
                    </div>
                </Header>

                <LeftOption menu={menu} handlePage={handlePage} index={currentIndex} />
                <RightOption menu={menu} handlePage={handlePage} index={currentIndex} />
                <div className="col-start-2 col-span-4 z-20">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageTemplate;