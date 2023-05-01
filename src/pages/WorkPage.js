import { motion } from "framer-motion";
import Card from "../components/Card";


function WorkPage() {
    const workData = [
        {
            title: 'Portfolio Website',
            img: '/placeholder.img',
            description: 'Reusable and responsive portfolio website created with React and AWS Amplify/Lambda. Implements component design state management.',
            link: '/',
            buttontext: 'View site',
        },
        {
            title: 'Detailing Quote Generator',
            img: '585logo',
            description: 'Reusable auto detailing form combined with Django back-end API to automatically quote customers with accurate info and scheduling.',
            link: 'link.com',
            buttontext: 'View Codepen',
        },
        {
            title: 'Meal Planner App',
            img: '/placeholder.img',
            description: 'Drag and drop meal planner builder with React/Django. Includes user and registration features. Google calendar-like interface.',
            link: 'link.com',
            buttontext: 'View site',
        },
        {
            title: 'Financial API',
            img: '/placeholder.img',
            description: 'Backend Flask financial API that manages your investment portfolio and assets as well as recommends stocks based on financial anaylsis and data modeling.',
            link: 'link.com',
            buttontext: 'View docs',
        },
    ];

    const renderedCards = workData.map((option) => {
        return <Card workData={option} />
    });


    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl text-black text-center font-semibold">My Work</h1>
            <p className="text-lg md:text-xl mx-10 md:mx-40 mt-12 text-center">
              I have worked with small and large companies to design beautiful sites, applications, and tools for a wide variety of uses.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid mx-10 lg:grid-cols-2 justify-items-stretch gap-8 mt-24 max-w-md min-w-full">
              {renderedCards}
            </div>
          </div>
        </motion.div>
    );
};

export default WorkPage;