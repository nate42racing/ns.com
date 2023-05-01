import Button from "./Button";

function Card({ workData }) {
    return (
        <div className="flex flex-col items-center justify-end h-64 border rounded-lg shadow hover:bg-red-400 hover:border-black group">
            <p className="text-center text-2xl font-semibold hidden group-hover:flex mx-4">{workData.title}</p>
            <p className="text-center text-lg hidden group-hover:flex mb-2 mx-4">{workData.description}</p>
            <Button outline className="hidden group-hover:flex mb-4">Click me</Button>
        </div>
        )
};

export default Card;