import "../NavBar/NavBar.css"
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const showCategories = (view) => {
        return (
            <ul className={`navItems ${view === 'desktopView' ? 'mobileHidden' : ''}`}>
                <li>
                    <NavLink to="/reservoir" onClick={() => setNavbarOpen(false)}>Reserva Forestal</NavLink>
                </li>
                <li>
                    <NavLink to="/services" onClick={() => setNavbarOpen(false)}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/galery" onClick={() => setNavbarOpen(false)}>Galería</NavLink>
                </li>
                <li>
                    <NavLink to="/history" onClick={() => setNavbarOpen(false)}>Historia</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={() => setNavbarOpen(false)}>Ubicacion</NavLink>
                </li>
            </ul>
        )
    }

    return(
        <div>
            <nav className="navContainer">
                <Link to="/">
                    <img src="../images/logo.png" className="navLogo" alt="villa barbara logo"/>
                </Link>

                {navbarOpen ? null : showCategories('desktopView')}

                <section onClick={handleToggle}>
                    {navbarOpen ? <img className='closeMenu desktopHidden' src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png" alt="burgerMenuIcon"/> : <img className='burgerMenu desktopHidden' src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png" alt="burgerMenuIcon"/>}   
                </section>
            </nav>
            <section className={navbarOpen ? "showMobileMenu" : ""}>
                {navbarOpen ? showCategories() : null}
            </section>
        </div>
    )
}

export default NavBar