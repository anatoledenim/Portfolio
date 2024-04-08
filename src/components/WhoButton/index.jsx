import { useContext } from 'react'
import '../../styles/WhoButton/WhoButton.css'
import { ActiveContext } from '../../contexts/active.context'

function WhoButton() {
    const { toggleActive, isActive } = useContext(ActiveContext)
    let whoButton = 'who-button'

    if (isActive) {
        whoButton = 'who-button who-button-disappear'
    }

    if (isActive === 'stop') {
        whoButton = 'who-button who-button-stop'
    }
    return (
        <div className="button-div">
            <button className={whoButton} onClick={() => toggleActive()}>
                Qui-suis-je ?
            </button>
        </div>
    )
}

export default WhoButton
