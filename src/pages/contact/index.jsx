import '../../styles/Contact/Contact.css'
import email from '../../assets/logo gmail.png'
import linkedin from '../../assets/logo linkedin.jpg'
import téléphone from '../../assets/logo téléphone.png'
import { EndpointContext } from '../../contexts/endpoint.context'
import { useContext, useEffect } from 'react'

function Contact() {
    const { getEndpoint } = useContext(EndpointContext)
    useEffect(() => {
        getEndpoint()
    }, [getEndpoint])
    return (
        <div className="contact">
            <h1 className="contact-title">Contact</h1>
            <div className="contact-section">
                <a
                    href="mailto:dev-web@anatole-denimal.com"
                    className="contact-card"
                >
                    <img className="contact-card-img" src={email} alt="email" />
                    <p className="contact-card-text">
                        E-mail
                        <span className="display-none-contact">
                            : dev-web@anatole-denimal.com
                        </span>
                    </p>
                </a>
                <a href="tel:+33659831223" className="contact-card">
                    <img
                        className="contact-card-img"
                        src={téléphone}
                        alt="téléphone"
                    />
                    <p className="contact-card-text">
                        Téléphone
                        <span className="display-none-contact">
                            : 06 59 83 12 23
                        </span>
                    </p>
                </a>
                <a
                    href="https://www.linkedin.com/in/anatole-denimal-1a4576216/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-card"
                >
                    <img
                        className="contact-card-img"
                        src={linkedin}
                        alt="linkedin"
                    />
                    <p className="contact-card-text">
                        Linkedin
                        <span className="display-none-contact">
                            :
                            https://www.linkedin.com/in/anatole-denimal-1a4576216/
                        </span>
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Contact
