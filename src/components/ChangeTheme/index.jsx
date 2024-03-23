import controller from '../../assets/game-controller-svgrepo-com.svg'
import arrow from '../../assets/Arrow-down.svg.png'
import mic from '../../assets/microphone-342.svg'
import { ActiveContext } from '../../contexts/active.context'
import { useContext } from 'react'
import '../../styles/ChangeTheme/ChangeTheme.css'

function ChangeTheme({ active }) {
    const { isActive } = useContext(ActiveContext)
    let divClass = 'pic-div'
    if (isActive) {
        divClass = 'pic-div-slider'
    }
    return (
        <div className={divClass}>
            <img
                className="pic-div-game"
                src={controller}
                alt="manette de jeu"
            />
            <img
                className="pic-div-arrow"
                src={arrow}
                alt="flèche qui pointe vers le bas"
            />
            <img
                className="pic-div-mic"
                src={mic}
                alt="micro d'enregistrement"
            />
        </div>
    )
}

export default ChangeTheme
