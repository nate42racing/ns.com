import { motion } from "framer-motion";
import Card from "../components/Card";


function WorkPage() {
    const workData = [
        {
            title: 'Portfolio Website',
            img: '/placeholder.img',
            description: 'Reusable and responsive portfolio website created with React and AWS Amplify/Lamda.',
            link: 'link.com',
            buttontext: 'View site',
        },
        {
            title: 'Detailing Quote Generator',
            img: '/placeholder.img',
            description: 'dasda',
            link: 'link.com',
            buttontext: 'View Codepen',
        },
        {
            title: 'Meal Planner App',
            img: '/placeholder.img',
            description: 'dasda',
            link: 'link.com',
            buttontext: 'View site',
        },
        {
            title: 'Financial API',
            img: '/placeholder.img',
            description: 'dasda',
            link: 'link.com',
            buttontext: 'View docs',
        },
    ];

    const renderedCards = workData.map((option) => {
        return <Card workData={option} />
    });


    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}}>
            <div className="flex flex-col items-center">
                <h1 className="text-5xl text-black text-center font-semibold">My Work</h1>
                <p className="text-xl mx-40 mt-12 text-center">I have worked with small and large companies to design beautiful sites, applications, and tools for a wide variety of uses.</p>
            </div>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-stretch gap-8 mt-24">
                {renderedCards}
            </div>
        </motion.div>
    )
};

export default WorkPage;