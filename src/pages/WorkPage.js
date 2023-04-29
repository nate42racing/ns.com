import { motion } from "framer-motion";
import CardFlip from "../components/CardFlip";


function WorkPage() {
    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <CardFlip />
        </motion.div>
    )
};

export default WorkPage;