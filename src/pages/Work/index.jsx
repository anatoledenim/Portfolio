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
                <p className="worksection-right-date">
                    Date de réalisation : {work.date}
                </p>
                <p className="worksection-right-tags">
                    Compétences acquises/perfectionnées grâce à ce projet :{' '}
                    <ul className="worksection-right-tag">
                        {work.tags &&
                            work.tags.map((tag, i) => (
                                <li key={'compétence-' + i}>{tag}</li>
                            ))}
                    </ul>
                    <ul className="worksection-right-tag-pic">
                        {work.tagpic &&
                            work.tagpic.map((pic, i) => (
                                <li>
                                    <img
                                        className="worksection-right-tag-pic-img"
                                        key={'pic-' + i}
                                        alt=""
                                        src={pic}
                                    />
                                </li>
                            ))}
                    </ul>
                </p>
                {work.client === 'Openclassrooms' ? (
                    <p className="worksection-right-client">
                        Ce projet à été réalisé dans le cadre de ma formation
                        Openclassrooms !
                    </p>
                ) : (
                    <p className="worksection-right-client">
                        Projet réalisé pour {work.client}
                    </p>
                )}
                <p className="worksection-right-lien">
                    Lien du site/repo github :{' '}
                    <a href={work.lien}>{work.lien}</a>
                </p>
            </div>
        </div>
    )
}

export default Work
