import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div>
            <nav className="right-arrow">
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