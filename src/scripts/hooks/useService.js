import {useHttp} from "./useHttp";

export default function useService() {
    const {loading, request, error, clearError} = useHttp();

    const getFilms = async () => {
        return await request('http://www.mocky.io/v2/5ed7c6a63200009abc274c37');
    }

    return {
        getFilms, loading, error, clearError
    }
}
