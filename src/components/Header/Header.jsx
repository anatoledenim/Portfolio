import { Link } from 'react-router-dom'
import '../../styles/Header/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="navbar">
                <Link
                    className="navbar-button navbar-border-underline"
                    to={'/'}
                >
                    Accueil
                </Link>
                <Link
                    className="navbar-button navbar-border-underline"
                    to={'/portfolio'}
                >
                    Portfolio
                </Link>
                <Link
                    className="navbar-button navbar-border-underline"
                    to={'/bonus'}
                >
                    Bonus
                </Link>
            </div>
        </div>
    )
}

export default Header
