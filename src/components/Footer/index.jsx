import '../../styles/Footer/Footer.css'
import github from '../../assets/logo github.webp'
import linkedin from '../../assets/logo linkedin.jpg'

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
                <img className="footer-img" src="" alt=""></img>
            </div>
        </div>
    )
}

export default Footer
