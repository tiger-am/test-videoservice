import { SET_FILTER } from '../actionTypes'
import { useStorage } from "hooks/useStorage";

export const setFilter = (filter) => {
    const { setData } = useStorage();

    setData('search', filter);

    return {
        type: SET_FILTER,
        payload: filter
    };
};
