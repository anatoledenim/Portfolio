import ChangeTheme from '../../components/ChangeTheme'
import AnimatedTitle from '../../components/AnimatedTitle'
import '../../styles/Home/Home.css'

function Home() {
    return (
        <div className="home">
            <AnimatedTitle />
            <ChangeTheme />
        </div>
    )
}

export default Home
