import { motion } from "framer-motion";

function ContactPage() {
    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}>
            <h1 className="text-4xl text-black">Contact</h1>
        </motion.div>
    )
};

export default ContactPage;