import React from 'react';
import classes from "./NavBar.module.css";


const NavBar = () => {
    return (
        <div>
            <nav className={classes.NavBarMain}>
                <ul className={classes.NavBar}>
                    <li><a href={"#"}>Menu</a></li>
                    <li><a href={"#"}>Promotions</a></li>
                    <li className={classes.dropDown}><a href={"#"}>Catalog<span>&rsaquo;</span></a>
                        <ul>
                            <li><a href={"#"}>Smartphones</a></li>
                            <li><a href={"#"}>Laptops</a></li>
                            <li><a href={"#"}>Kitchen appliances</a></li>
                            <li><a href={"#"}>Bath equipment</a></li>
                            <li><a href={"#"}>TVs and multimedia</a></li>
                        </ul>
                    </li>
                    <li className={classes.dropDown}><a href={"#"}>Popular</a>
                        <ul>
                            <li><a href={"#"}>Smartphones</a></li>
                            <li><a href={"#"}>Laptops</a></li>
                            <li><a href={"#"}>Kitchen appliances</a></li>
                            <li><a href={"#"}>Bath equipment</a></li>
                            <li><a href={"#"}>TVs and multimedia</a></li>
                        </ul>
                    </li>
                    <li><a href={"#"}>Basket</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default NavBar;