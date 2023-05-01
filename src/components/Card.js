import Button from "./Button";

function Card({ workData }) {
    return (
        <div className="flex flex-col grow-1 items-center justify-start h-64 border rounded-lg shadow hover:bg-red-400 hover:opacity-60 hover:border-black group transition ease-in-out duration-500 delay-150">
            <p className="text-center text-2xl font-semibold hidden group-hover:flex mt-10">{workData.title}</p>
            <p className="text-center text-lg hidden group-hover:flex mb-2 mx-4">{workData.description}</p>
            <a href={workData.link}>
                <Button outline className="hidden group-hover:flex mb-4">{workData.buttontext}</Button>
            </a>


        </div>
        )
};

export default Card;