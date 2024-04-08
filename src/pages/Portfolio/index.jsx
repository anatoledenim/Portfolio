import '../../styles/Portfolio/Portfolio.css'
import { useState, useEffect } from 'react'
import DisplayWorks from '../../components/DisplayWorks'

function Portfolio() {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetchDatas(url) {
            const response = await fetch(url)
            const works = await response.json()
            setDatas(works)
            setIsLoading(false)
        }
        fetchDatas('/works.json')
    }, [])

    return (
        <div className="portfolio">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="portfolio-sectioncards">
                {isLoading && <h2>Les travaux arrivent 🥸</h2>}
                {datas.map(
                    (data) =>
                        datas && (
                            <DisplayWorks
                                key={data.id}
                                picture={data.picture}
                                alt={data.title}
                                lien={data.lien}
                                id={data.id}
                            />
                        )
                )}
            </div>
        </div>
    )
}

export default Portfolio
