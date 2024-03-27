import '../../styles/PresentationImage/PresentationImage.css'

function ImagePresentation({ photo, alt }) {
    return (
        <div className="presentation-pic">
            <img className="presentation-pic-image" src={photo} alt={alt} />
        </div>
    )
}

export default ImagePresentation
