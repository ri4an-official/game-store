import { useEffect, useState } from "react"

export const useTheme = (userTheme: string = "dark") => {
    const [theme, setTheme] = useState(userTheme ?? "light")
    const toggleTheme = () => {
        if (theme !== userTheme) {
            localStorage.setItem("theme", userTheme)
            setTheme(userTheme)
        } else {
            localStorage.setItem("theme", "light")
            setTheme("light")
        }
    }
    useEffect(() => {
        const localTheme = localStorage.getItem("theme")
        localTheme && setTheme(localTheme)
    }, [])
    return {
        theme,
        toggleTheme,
    }
}
