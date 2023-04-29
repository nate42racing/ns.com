import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

function ContactPage() {
    return (
        <motion.div  exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <ContactForm />
        </motion.div>
    )
};

export default ContactPage;