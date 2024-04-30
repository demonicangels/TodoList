import { NavLink } from 'react-router-dom';
import '../css/navigation.css'

const links = [
    {
        id: 1,
        path: '/',
        text: "Home"
    },
    {
        id: 2,
        path: '/todo',
        text: "Todo List"
    },
    {
        id: 3,
        path: '/about',
        text: "About"
    },
    {
        id: 4,
        path: '/contacts',
        text: "Contacts"
    },
]

const Nav = () => {


    return ( 
        <nav className="navbar">
            <div className="nav">
                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.id}>
                                {
                                    <NavLink to={link.path}>
                                        {link.text}
                                    </NavLink>
                                }
                            </li>
                        );
                    })}

                </ul>
                
            </div>
        </nav>
     );
}

export default Nav;