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
                <a href="https://github.com/anatoledenim">
                    <img className="footer-img" src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/anatole-denimal-1a4576216/">
                    <img
                        className="footer-img"
                        src={linkedin}
                        alt="linkedin"
                    ></img>
                </a>
                <a href="mailto:anatole.denimall@gmail.com?subject=Hello">
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
