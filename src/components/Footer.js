import classNames from 'classnames';
import { FaFacebook, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import EmailForm from './EmailForm';

function Footer({ className, handlePage }) {
    const classes = classNames(className)

    return (
        <div className={classes}>
            <div className='flex flew-row pt-12 text-4xl gap-4'>
                <a href='https://www.facebook.com/yankees42/'><FaFacebook/></a>
                <a href='https://www.linkedin.com/in/nathaniel-shelhart-a876101b4/'><FaLinkedin /></a>
                <a href='https://github.com/naterocks49'><FaGithub /></a>
                <a href='https://www.tiktok.com/@nateshelhart'><FaTiktok /></a>
            </div>
            <ul className='h-28 flex flex-row items-center gap-6 text-2xl font-semibold text-gray-200 '>
                <li className=' hover:border-b-2 opacity-70 hover:opacity-100'><Link to="/" onClick={handlePage}>Home</Link></li>
                <li className=' hover:border-b-2 opacity-70 hover:opacity-100'><Link to="/about" onClick={handlePage}>About</Link></li>
                <li className=' hover:border-b-2 opacity-70 hover:opacity-100'><Link to="/work" onClick={handlePage}>Work</Link></li>
                <li className=' hover:border-b-2 opacity-70 hover:opacity-100'><Link to="/contact" onClick={handlePage}>Contact</Link></li>
            </ul>
            <div className='mt-2 mb-6 flex flex-col items-center'>
                <h3 className='text-gray-50 mb-4 text-xl'>Subscribe to my mailing list!</h3>
                <EmailForm/>
            </div>
        </div>
    );
};

export default Footer;