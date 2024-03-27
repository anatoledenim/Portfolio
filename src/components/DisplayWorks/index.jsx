import '../../styles/DisplayWorks/DisplayWorks.css'
import { Link } from 'react-router-dom'

function DisplayWorks({ picture, alt, id }) {
    return (
        <div className="displayworks">
            <Link className="displayworks-link" to={`/work/${id}`}>
                <div className="displayworks-firstsection">
                    <img className="displayworks-img" src={picture} alt={alt} />
                </div>
            </Link>
        </div>
    )
}

export default DisplayWorks
