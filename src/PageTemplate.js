import LeftOption from "./components/LeftOption";
import RightOption from "./components/RightOption";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

            <div className="grid grid-cols-6 auto-rows-min bg-cover h-full" >

                <Header className="flex sticky top-0 z-10 items-center justify-between h-20 col-start-1 col-span-6 bg-white" logoPath={"/ns_logo.png"}>
                    <div>
                        <Dropdown className="mr-5" navitems={navitems} handlePage={handlePage} />           
                    </div>
                </Header>

                <LeftOption menu={menu} handlePage={handlePage} index={currentIndex} />
                <RightOption menu={menu} handlePage={handlePage} index={currentIndex} />
                <div className="pt-40 col-start-2 col-span-4 mb-40">
                    {children}
                </div>
                <Footer handlePage={handlePage} className="bg-red-600 opacity-70 col-start-1 col-span-6 flex flex-col items-center"/>
            </div>
        </div>
    );
};

export default PageTemplate;