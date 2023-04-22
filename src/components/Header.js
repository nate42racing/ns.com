import classNames from 'classnames';

function Header({ className, children }) {
    const classes = classNames(className, "ml-5 text-white");

    return <div className={classes}>HEADER{children}</div>
};

export default Header;