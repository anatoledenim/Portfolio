import controller from '../../assets/game-controller-svgrepo-com.svg'
import arrow from '../../assets/Arrow-down.svg.png'
import mic from '../../assets/microphone-342.svg'
import '../../styles/ChangeTheme/ChangeTheme.css'

function ChangeTheme() {
    return (
        <div className="pic-div">
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
