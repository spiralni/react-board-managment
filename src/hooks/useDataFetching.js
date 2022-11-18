import { useEffect, useState } from "react"

function useDataFetching(dataSource) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            setLoading(true)

            try {
                const response = await fetch(dataSource)
                const result = await response.json()

                if (result) {
                    setData(result)
                }
            } catch (e) {
                setError(e.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [dataSource])
    
    return [loading, error, data]
}

export default useDataFetching
