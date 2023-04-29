import { motion } from "framer-motion";


function WorkPage() {
    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}>
            <h1 className="text-4xl text-black">Work</h1>
        </motion.div>
    )
};

export default WorkPage;