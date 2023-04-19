import LeftOption from "./components/LeftOption";
import RightOption from "./components/RightOption";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PageTemplate({ children }) {
    const navigate = useNavigate();
    const menu = {
        0: '/',
        1: '/about',
        2: '/work',
        3: '/contact',
    };

    const findIndex = (page) => {
        let entries = Object.entries(menu);
        let foundEntry = entries.find(([key, value]) => value === page);
        let foundKey = foundEntry ? foundEntry[0] : null;

        return Number(foundKey);
    };

    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [currentIndex, setCurrentIndex] = useState(findIndex(currentPage))

    const handlePage = (newPage) => {
        setCurrentPage(newPage);
        navigate(newPage);
        setCurrentIndex(findIndex(currentPage))
    };

    return (
        <div>
            <LeftOption menu={menu} handleIndex={setCurrentIndex} handlePage={handlePage} index={currentIndex} />
            {children}
            <RightOption menu={menu} handleIndex={setCurrentIndex} handlePage={handlePage} index={currentIndex} />
        </div>
    );
};

export default PageTemplate;