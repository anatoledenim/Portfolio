import '../../styles/PresentationText/PresentationText.css'
// import video from '../../assets/videoplayback.mp4'

function PresentationText({ content }) {
    return (
        <div className="presentation-description">
            <p className="presentation-description-text"> {content} </p>
        </div>
    )
}

export default PresentationText
