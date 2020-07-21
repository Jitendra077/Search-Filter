import React from 'react';
import "./Navbar.css";
import Search from "./Search";


const Navbar = (props) => {
    console.log(props)


    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className ="li">
                           <a href = "#">Layout 1</a>
                        </li>
                        <li className ="li">
                           <a href = "#">About</a>
                        </li>
                        <li className ="li">
                           <a href = "#">Services</a>
                        </li>
                        <li className ="li">
                           <a href = "#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Search />
        </div>
    )
}
export default Navbar