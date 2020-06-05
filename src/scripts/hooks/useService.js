import {useHttp} from "./useHttp";

export default function useService() {
    const {loading, request, error, clearError} = useHttp();

    const getFilms = async () => {
        return await request('http://www.mocky.io/v2/5ed7c6a63200009abc274c37');
    };

    const getGenres = async () => {
        return await request('http://www.mocky.io/v2/5edaa0643300009dfc79ed0e');
    };

    const getChannels = async () => {
        return await request('http://www.mocky.io/v2/5edaa015330000560079ed0d');
    };

    return {
        getFilms, getGenres, getChannels, loading, error, clearError
    }
}
