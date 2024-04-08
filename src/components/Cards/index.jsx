import '../../styles/Cards/Cards.css'

function Cards({ picture, alt }) {
    return (
        <div className="cards">
            <img src={picture} alt={alt} />
        </div>
    )
}

export default Cards
