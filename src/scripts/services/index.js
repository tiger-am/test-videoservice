import {useState, useCallback} from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError(e.message)
            throw e
        }
    }, [])

    const clearError = useCallback(() => setError(null), [])

    return {loading, request, error, clearError}
}


export default function useService() {
    const {loading, request, error, clearError} = useHttp();

    const getFilms = async () => {
        // const data = await request('http://www.mocky.io/v2/5ed67c08340000480106dac8');
        const data = await request('http://www.mocky.io/v2/5ed7c6a63200009abc274c37');
        return data
    }

    return {
        getFilms, loading, error, clearError
    }
}

export function useStorage() {
    const getData = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }

    const setData = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    const removeData = (key) => {
        localStorage.removeItem(key);
    }

    return {
        getData, setData, removeData
    }
}