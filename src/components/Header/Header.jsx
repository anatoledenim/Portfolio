import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ActiveContext } from '../../contexts/active.context'
import '../../styles/Header/Header.css'
import { EndpointContext } from '../../contexts/endpoint.context'

function Header() {
    const { isActive } = useContext(ActiveContext)
    let navbarClass = 'navbar'
    if (isActive) {
        navbarClass = 'navbar-slider'
    }
    if (isActive === 'stop') {
        navbarClass = 'navbar-stop'
    }

    const { endpoint } = useContext(EndpointContext)
    if (endpoint === '/portfolio' || endpoint === '/contact') {
        console.log(endpoint)
        navbarClass = 'navbar-stop'
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
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Header
