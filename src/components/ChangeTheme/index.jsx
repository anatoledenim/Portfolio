import controller from '../../assets/game-controller-svgrepo-com.svg'
import arrow from '../../assets/Arrow-down.svg.png'
import mic from '../../assets/microphone-342.svg'
import { ActiveContext } from '../../contexts/active.context'
import { useContext } from 'react'
import '../../styles/ChangeTheme/ChangeTheme.css'
import { animateScroll as scroll } from 'react-scroll'

function ChangeTheme({ active }) {
    const { isActive } = useContext(ActiveContext)
    let divClass = 'pic-div'
    if (isActive) {
        divClass = 'pic-div-slider'
    }

    function scrollTo() {
        scroll.scrollTo(910)
    }
    return (
        <div className={divClass}>
            <img
                className="pic-div-game display-none"
                src={controller}
                alt="manette de jeu"
            />
            <img
                onClick={() => scrollTo()}
                id="anchor"
                className="pic-div-arrow"
                src={arrow}
                alt="flèche qui pointe vers le bas"
            />
            <img
                className="pic-div-mic display-none"
                src={mic}
                alt="micro d'enregistrement"
            />
        </div>
    )
}

export default ChangeTheme
