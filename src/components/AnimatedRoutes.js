import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/HomePage';
import About from '../pages/AboutPage';
import Contact from '../pages/ContactPage';
import Work from '../pages/WorkPage';
import { AnimatePresence } from 'framer-motion';

function AnimateRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                   <Route path="/" element={<Home />} />
                   <Route path="/contact" element={<Contact />} />
                   <Route path='/work' element={<Work />} />
                   <Route path="/about" element={<About />} />
                </Routes>
        </AnimatePresence>
    )
};

export default AnimateRoutes;