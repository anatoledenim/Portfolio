import ChangeTheme from '../../components/ChangeTheme'
import AnimatedTitle from '../../components/AnimatedTitle'
import WhoButton from '../../components/WhoButton'
import { ActiveContext } from '../../contexts/active.context'
import '../../styles/Home/Home.css'
import { useContext } from 'react'

function Home() {
    const { isActive } = useContext(ActiveContext)
    document.documentElement.style.overflow = 'hidden'

    if (isActive) {
        setTimeout(
            () => (document.documentElement.style.overflow = 'scroll'),
            2600
        )
    }
    return (
        <div className="home">
            <div className="home-title">
                <AnimatedTitle />
                <WhoButton />
                <ChangeTheme />
                <div className="home-presentation"></div>
            </div>
        </div>
    )
}

export default Home
