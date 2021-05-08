import { useEffect, useState } from "react"

export const useFetch = (url: string, options?: any) => {
    const [status, setStatus] = useState({
        loading: false,
        data: undefined,
        error: undefined,
    })
    useEffect(() => {
        if (url) {
            setStatus({ ...status, loading: true })
            fetch(url, options)
                .then((res) => res.json())
                .then((data) => setStatus({ ...status, data }))
                .catch((error) => setStatus({ ...status, error }))
                .finally(() => setStatus({ ...status, loading: false }))
        }
    }, [])
    return { ...status }
}
