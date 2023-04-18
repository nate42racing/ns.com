import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div  className="right-arrow">
            <nav>
                <ul>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;