import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ActiveContext } from '../../contexts/active.context'
import '../../styles/Header/Header.css'

function Header() {
    const { isActive } = useContext(ActiveContext)
    let navbarClass = 'navbar'

    if (isActive) {
        navbarClass = 'navbar-slider'
    }
    return (
        <div className="header">
            <div className={navbarClass}>
                <Link className="button border-underline" to={'/'}>
                    Accueil
                </Link>
                <Link className="button border-underline" to={'/portfolio'}>
                    Portfolio
                </Link>
                <Link className="button border-underline" to={'/contact'}>
                    Contacts
                </Link>
            </div>
        </div>
    )
}

export default Header
