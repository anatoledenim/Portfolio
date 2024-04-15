import '../../styles/Footer/Footer.css'
import github from '../../assets/logo github.webp'
import linkedin from '../../assets/logo linkedin.jpg'
import gmail from '../../assets/logo gmail.png'

function Footer() {
    return (
        <div className="footer">
            {/* <h3 className="footer-title">Portfolio - Anatole Denimal</h3> */}
            <p className="footer-copyright">copyright – tous droits réservés</p>
            <div>
                <a
                    href="https://github.com/anatoledenim"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className="footer-img" src={github} alt="github" />
                </a>
                <a
                    href="https://www.linkedin.com/in/anatole-denimal-1a4576216/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="footer-img"
                        src={linkedin}
                        alt="linkedin"
                    ></img>
                </a>
                <a
                    href="mailto:dev-web@anatole-denimal.com?subject=Hello"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="footer-img gmail-logo"
                        src={gmail}
                        alt="gmail"
                    ></img>
                </a>
            </div>
        </div>
    )
}

export default Footer
