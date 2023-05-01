import { motion } from "framer-motion";
import Card from "../components/Card";


function WorkPage() {
    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <div>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </motion.div>
    )
};

export default WorkPage;