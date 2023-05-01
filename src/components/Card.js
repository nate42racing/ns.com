import Button from "./Button";

function Card({ workData }) {
    const classes = `bg-red-700/60  bg-cover flex flex-col grow-1 items-center justify-start h-64 border rounded-lg shadow hover:bg-red-700/40 hover:border-black group transition ease-in-out duration-500 delay-150`
    return (
        <div className={classes}>
            <p className="text-center text-2xl font-semibold mt-6">{workData.title}</p>
            <p className="text-center text-sm md:text-lg  mb-2 mx-4">{workData.description}</p>
            <a href={workData.link}>
                <Button outline className=" mb-4">{workData.buttontext}</Button>
            </a>


        </div>
        )
};

export default Card;