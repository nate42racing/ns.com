import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

function ContactPage() {
    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}>
            <ContactForm />
        </motion.div>
    )
};

export default ContactPage;