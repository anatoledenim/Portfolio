import ChangeTheme from '../../components/ChangeTheme'
import AnimatedTitle from '../../components/AnimatedTitle'
import { ActiveContext } from '../../contexts/active.context'
import { useContext, useEffect } from 'react'
import ImagePresentation from '../../components/PresentationImage'
import photo from '../../assets/IMG_2915.jpg'
import '../../styles/Home/Home.css'
import PresentationText from '../../components/PresentationText'
import WhoButton from '../../components/WhoButton'
import CV from '../../assets/CV_DENIMAL_Anatole_developpeur_web.pdf'
// import Cards from '../../components/Cards'
// import sass from '../../assets/sass_logo.png'
// import nodejs from '../../assets/nodejs-logo.png'
// import react from '../../assets/React-JS.png'
// import htmlcss from '../../assets/html_css_js.png'
// import GameBoy from '../../assets/xkat9inz.bmp'

// const liens = [htmlcss, sass, react, nodejs]

function Home() {
    const { toggleActive, isActive } = useContext(ActiveContext)
    document.documentElement.style.overflow = 'hidden'

    useEffect(() => {
        if (isActive === 'stop') {
            document.documentElement.style.overflow = 'scroll'
        }
    }, [isActive, toggleActive])

    if (window.screen.width < 1900) {
        document.documentElement.style.overflow = 'scroll'
    }

    return (
        <div className="home">
            <div className="home-title">
                <AnimatedTitle />
                <ChangeTheme />
                <WhoButton />
                <div className="home-presentation">
                    {/* <div className="home-presentation-cards-div">
                        <PresentationText content="Stack téchniques :" />
                        <div className="home-presentation-cards">
                            {liens.map((lien) => (
                                <Cards key={lien} picture={lien} />
                            ))}
                        </div>
                    </div> */}
                    <div className="home-presentation-div">
                        <a href={CV} target="_blank" rel="noreferrer">
                            <ImagePresentation
                                photo={photo}
                                alt="anatole denimal(moi)"
                            />
                        </a>
                        <a
                            className="home-presentation-cv border-underline-cv"
                            href={CV}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Cliquez pour voir mon CV
                        </a>
                    </div>
                    <PresentationText content="Je m'appelle Anatole, developpeur web full stack Junior ! J'ai effectué une reconversion dans le domaine du web qui m'a toujours passionné. Travaillant d'abord en autodidacte, j'ai ensuite décidé de poursuivre mon apprentissage à travers la formation dédiée d'Openclassrooms. Aujourd'hui diplomé, je saurais satisfaire vos attentes." />
                    {/* <img src={GameBoy} alt="gameboy" /> */}
                </div>
            </div>
        </div>
    )
}

export default Home
