import {useHttp} from "./useHttp";

export default function useService() {
    const {loading, request, error, clearError} = useHttp();

    const getFilms = async () => {
        return await request('http://www.mocky.io/v2/5edb67ca32000077005d2740');
    };

    const getGenres = async () => {
        return await request('http://www.mocky.io/v2/5edaa0643300009dfc79ed0e');
    };

    const getChannels = async () => {
        return await request('http://www.mocky.io/v2/5edaa015330000560079ed0d');
    };

    const getComments = async () => {
        return await request('http://www.mocky.io/v2/5edb60a132000056005d272a');
    };

    return {
        getFilms, getGenres, getChannels, getComments, loading, error, clearError
    }
}
