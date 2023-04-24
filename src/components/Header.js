import classNames from 'classnames';

function Header({ className, children, logoPath }) {
    const classes = classNames(className, "ml-5 text-white");

    return (
        <div className={classes}>
            <img src={logoPath} alt="NS logo" width="150px" className='ml-5' />
            {children}
        </div>
    );
};

export default Header;