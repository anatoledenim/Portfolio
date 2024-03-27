import ChangeTheme from '../../components/ChangeTheme'
import AnimatedTitle from '../../components/AnimatedTitle'
import WhoButton from '../../components/WhoButton'
// import { ActiveContext } from '../../contexts/active.context'
// import { useContext } from 'react'
import ImagePresentation from '../../components/PresentationImage'
import photo from '../../assets/IMG_1912.jpg'
import '../../styles/Home/Home.css'
import PresentationText from '../../components/PresentationText'
import CV from '../../assets/CV.pdf'

function Home() {
    // const { isActive } = useContext(ActiveContext)
    // document.documentElement.style.overflow = 'hidden'

    // if (isActive) {
    //     setTimeout(
    //         () => (document.documentElement.style.overflow = 'scroll'),
    //         2600
    //     )
    // }
    return (
        <div className="home">
            <div className="home-title">
                <AnimatedTitle />
                <WhoButton />
                <ChangeTheme />
                <div className="home-presentation">
                    <PresentationText
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <div className="home-presentation-div">
                        <ImagePresentation
                            photo={photo}
                            alt="anatole denimal(moi)"
                        />
                        <a
                            className="home-presentation-cv border-underline"
                            href={CV}
                        >
                            Cliquez pour voir mon CV
                        </a>
                    </div>
                    <PresentationText
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
