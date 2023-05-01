import classNames from 'classnames';

function Header({ className, children, logoPath }) {
    const classes = classNames(className, "border-b text-black");

    return (
        <div className={classes}>
            <a href="/">
                <img src={logoPath} alt="NS logo" width="150px" className='ml-5' />
                </a>
            {children}
        </div>
    );
};

export default Header;