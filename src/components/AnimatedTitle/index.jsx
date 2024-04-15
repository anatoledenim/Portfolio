import { useContext } from 'react'
import '../../styles/AnimatedTitle/AnimatedTitle.css'
import { ActiveContext } from '../../contexts/active.context.jsx'

function AnimatedTitle() {
    const { isActive } = useContext(ActiveContext)
    let letterAClass = 'surname-capital-letter letter-a'
    let natoleClass = 'surname-natole'
    let letterDclass = 'surname-capital-letter letter-d'
    let eniClass = 'surname-eni'
    let malClass = 'surname-mal'
    let letterPClass = 'subtitle-letter-p'
    let firstOClass = 'subtitle-capital-letter first-o'
    let rtfClass = 'subtitle-rtf'
    let secondOClass = 'subtitle-capital-letter second-o'
    let liClass = 'subtitle-li'
    let thirdOClass = 'subtitle-capital-letter third-o'

    if (isActive === true) {
        letterAClass = 'surname-capital-letter letter-a-slide'
        natoleClass = 'surname-natole-animated'
        letterDclass = 'surname-capital-letter letter-d letter-d-yellow'
        eniClass = 'surname-eni surname-eni-animated'
        malClass = 'surname-mal surname-mal-animated'
        letterPClass = 'subtitle-letter-p subtitle-letter-p-animated'
        firstOClass = 'subtitle-capital-letter first-o first-o-slide'
        rtfClass = 'subtitle-rtf subtitle-rtf-animated'
        secondOClass = 'subtitle-capital-letter second-o second-o-slide'
        liClass = 'subtitle-li subtitle-li-animated'
        thirdOClass = 'subtitle-capital-letter third-o third-o-slide'
    }

    if (isActive === 'stop') {
        letterAClass = 'letter-a-stop'
        natoleClass = 'surname-natole-stop'
        letterDclass = 'letter-d-stop'
        eniClass = 'surname-eni-stop'
        malClass = 'surname-mal-stop'
        letterPClass = 'subtitle-letter-p-stop'
        firstOClass = 'first-o-stop'
        rtfClass = 'subtitle-rtf-stop'
        secondOClass = 'second-o-stop'
        liClass = 'subtitle-li-stop'
        thirdOClass = 'third-o-stop'
    }
    return (
        <div>
            <div className="animated-title">
                <h1 className="surname">
                    <span className={letterAClass}>A</span>
                    <span className={natoleClass}>NATOLE</span>
                    <span className={letterDclass}>D</span>
                    <span className={eniClass}>ENI</span>
                    <span className={malClass}>MAL</span>
                    <span className="surname-title-border"></span>
                </h1>
                <br />
                <h2 className="subtitle">
                    <span className="subtitle-border"></span>
                    <span className={letterPClass}>P</span>
                    <span className={firstOClass}>O</span>
                    <span className={rtfClass}>RTF</span>
                    <span className={secondOClass}>O</span>
                    <span className={liClass}>LI</span>
                    <span className={thirdOClass}>O</span>
                </h2>
            </div>
            <div className="responsive-animated-title">
                <h1 className="responsive-surname">Anatole Denimal</h1>
                <h2 className="responsive-subtitle">Portfolio</h2>
            </div>
        </div>
    )
}

export default AnimatedTitle
