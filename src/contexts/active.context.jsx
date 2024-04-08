import { createContext, useState } from 'react'

export const ActiveContext = createContext()

export function ActiveContextProvider({ children }) {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = () => {
        setIsActive(true)
        setTimeout(() => {
            setIsActive('stop')
        }, 2600)
    }

    return (
        <ActiveContext.Provider
            value={{
                isActive,
                toggleActive,
            }}
        >
            {children}
        </ActiveContext.Provider>
    )
}
