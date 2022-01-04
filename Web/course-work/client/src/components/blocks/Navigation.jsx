import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
    return(
        <ul className="main-navigation flex-block flex-v-middle">
                <li>
                <Link to="/scourse" >Kурсы</Link>
                </li>
                <li>
                <Link to="/steachers">Преподователи</Link>
                </li>
                <li>
                <Link to="/scontacts">Контакты</Link>
                </li>
            </ul>
    )
}

export default Navigation;