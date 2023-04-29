import { motion } from "framer-motion";
import AboutContainer from "../components/AboutContainer";

function AboutPage() {
    const details = [
        {icon:'GoDeviceDesktop', name:'Front End', summary:'I value modern, sleek, and responsive front ends that delight users and bring in qualified leads.', languages:'HTML, CSS, JS, SaSS, Git', devtools:['WordPress','Tailwind', 'Figma', 'Webflow', 'Bootstrap']},
        {icon:'AiOutlineDatabase', name:'Back End', summary:'I enjoy building robust databases for small and large data management projects.', languages:'Python, JS, Java', devtools:['Django', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'REST API']}, 
        {icon:'AiOutlineCloudDownload', name:'DevOps', summary:'I have a passion for deploying systems that are scalable run themselves.', languages:'AWS, Firebase, Azure', devtools:['Docker', 'Github Actions', 'Kubernetes', 'Jenkins']},  
    ];

    const renderedSections = details.map((section) => {
        return <AboutContainer details={section} key={section.name}/>
    });

    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}  className="flex justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-black text-center font-semibold">About me</h1>
                <p className="text-xl mx-40 mt-12 text-center">I'm a full-stack developer with over 10 years of experience writing code. I work with top level agencies around the world creating interactive and responsive web applications.</p>
                <p className="text-xl mx-40 mt-8 text-center">I am always staying on the cutting edge of web technologies and I am always trying to push the envelope of what can be designed without sacraficing website performance and stability.</p>
                <div className="flex justify-center flex-row mt-12 gap-8">
                    {renderedSections}
                </div>
            </div>
        </motion.div>
    )
};

export default AboutPage;