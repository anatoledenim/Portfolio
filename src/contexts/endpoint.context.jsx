import { createContext, useState } from 'react'
// import { useParams } from 'react-router-dom'

export const EndpointContext = createContext()

export function EndpointContextProvider({ children }) {
    const [endpoint, setEndpoint] = useState('')
    const getEndpoint = () => {
        let id = window.location.pathname
        setEndpoint(id)
    }

    return (
        <EndpointContext.Provider
            value={{
                endpoint,
                getEndpoint,
            }}
        >
            {children}
        </EndpointContext.Provider>
    )
}
