import { motion } from "framer-motion";
import CardFlip from "../components/CardFlip";


function WorkPage() {
    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}>
            <CardFlip />
        </motion.div>
    )
};

export default WorkPage;