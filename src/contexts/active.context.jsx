import { createContext, useState } from 'react'

export const ActiveContext = createContext()

export function ActiveContextProvider({ children }) {
    const [isActive, setIsActive] = useState(false)
    const toggleActive = (active) => {
        setIsActive(true)
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
