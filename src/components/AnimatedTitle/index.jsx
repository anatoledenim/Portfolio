import '../../styles/AnimatedTitle/AnimatedTitle.css'

function AnimatedTitle() {
    return (
        <div className="animated-title">
            <button className="who-button">Qui-suis-je ?</button>
            <h1 className="surname">
                <span className="surname-capital-letter letter-a">A</span>
                <span className="surname-natole">NATOLE</span>
                <span className="surname-capital-letter letter-d">D</span>
                <span className="surname-eni">ENI</span>
                <span className="surname-mal">MAL</span>
                <span className="surname-title-border"></span>
            </h1>
            <br />
            <h2 className="subtitle">
                <span className="subtitle-border"></span>
                <span className="subtitle-letter-p">P</span>
                <span className="subtitle-capital-letter first-o">O</span>
                <span className="subtitle-rtf">RTF</span>
                <span className="subtitle-capital-letter second-o">O</span>
                <span className="subtitle-li">LI</span>
                <span className="subtitle-capital-letter third-o">O</span>
            </h2>
        </div>
    )
}

export default AnimatedTitle
