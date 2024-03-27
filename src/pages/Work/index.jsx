import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Work/Work.css'

function Work() {
    const [work, setWork] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    let { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetchDatas(url) {
            const response = await fetch(url)
            const works = await response.json()
            let workData = works.find((element) => element.id === id)
            if (!workData) {
                navigate('/page-not-found')
                return
            }
            setWork(workData)
            setIsLoading(false)
        }
        fetchDatas('/works.json')
    }, [id, navigate])
    return (
        <div className="worksection">
            {isLoading && <h1>La page charge...</h1>}
            <div className="worksection-left">
                <img
                    className="worksection-left-img"
                    src={work.picture}
                    alt={work.title}
                />
            </div>
            <div className="worksection-right">
                <h1 className="worksection-right-title">{work.title}</h1>
            </div>
        </div>
    )
}

export default Work
