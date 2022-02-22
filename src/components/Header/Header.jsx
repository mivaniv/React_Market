import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (<header className={classes.header}>
            <div>
                <img src={"http://cashbacktop.ru/uploads/posts/2016-08/1472404562_aliexpress-logo-4.png"} alt={"#"}/>
            </div>
            <div className={classes.titleText}>
                <h1>Inforce</h1></div>
        </header>
    );
};

export default Header;