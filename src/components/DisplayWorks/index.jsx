import '../../styles/DisplayWorks/DisplayWorks.css'
import { Link } from 'react-router-dom'

function DisplayWorks({ lien, picture, alt, id }) {
    return (
        <div className="displayworks">
            <Link
                className="displayworks-link"
                to={`/work/${id}`}
                target="_blank"
            >
                <div className="displayworks-firstsection">
                    <img className="displayworks-img" src={picture} alt={alt} />
                </div>
            </Link>
        </div>
    )
}

export default DisplayWorks
