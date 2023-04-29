import { motion } from "framer-motion";
import AboutContainer from "../components/AboutContainer";

function AboutPage() {
    const details = [
        {icon:'GoDeviceDesktop', name:'Front End', summary:'', languages:'', devtools:''},
        {icon:'AiOutlineDatabase', name:'Back End', summary:'', languages:'', devtools:''}, 
        {icon:'AiOutlineCloudDownload', name:'DevOps', summary:'', languages:'', devtools:''},  
    ];

    const renderedSections = details.map((section) => {
        return <AboutContainer details={section} key={section.name}/>
    });

    return (
        <motion.div exit={{ x: window.innerWidth, transition: {duration: 0.4 }  }} initial={{width: 0}} animate={{width: "100%"}}  className="flex justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-black text-center font-semibold">About me</h1>
                <p className="text-xl mx-20 mt-12">I'm a full-stack developer with over 10 years of experience writing code. I work with top level agencies around the world creating interactive and responsive web applications.</p>
                <p className="text-xl mx-20 mt-8">I am always staying on the cutting edge of web technologies and I am always trying to push the envelope of what can be designed without sacraficing website performance and stability.</p>
                <div className="flex justify-center flex-row mt-12">
                    {renderedSections}
                </div>
            </div>
        </motion.div>
    )
};

export default AboutPage;