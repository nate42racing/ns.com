import { motion } from "framer-motion";

function AboutPage() {
    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}  className="flex justify-center">
            <div>
                <h1 className="text-5xl text-black text-center font-semibold">About me</h1>
                <p className="text-xl mx-20 mt-12">I'm a full-stack developer with over 10 years of experience writing code. I work with top level agencies around the world creating interactive and responsive web applications.</p>
                <p className="text-xl mx-20 mt-8">I am always staying on the cutting edge of web technologies and I am always trying to push the envelope of what can be designed without sacraficing website performance and stability.</p>
            </div>
        </motion.div>
    )
};

export default AboutPage;