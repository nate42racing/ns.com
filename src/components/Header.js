import classNames from 'classnames';

function Header({ className }) {
    const classes = classNames(className, "bg-red-400");

    return <div className={classes}>HEADER</div>
};

export default Header;