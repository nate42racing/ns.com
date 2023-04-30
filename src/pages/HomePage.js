import { motion } from "framer-motion";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function HomePage() {
    return (     
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <div className='flex flex-col mb-64 justify-center items-center text-center font-sans font-family:"Noto Sans"'>
                <h1 className="text-4xl font-bold text-black">
                    Web Developer, Engineer and Entrepreneur
                </h1>
                <h3 className="mt-8 text-2xl">
                    I build creative and scalable software technologies.
                </h3>
                <div className="mt-24">
                    <img src={"/portfolio.jpg"} alt="Portfolio" width="200px" className='rounded-full border-4 border-red-700' />
                </div>
                <div className="flex flex-row justify-items-center gap-8 mt-28">
                    <Link to="/contact">
                        <Button primary>Contact me</Button>
                    </Link>
                    <a href="/resume.pdf"><Button outline>View my resume</Button></a>
                </div>
            </div>
        </motion.div>
    )
};

export default HomePage;