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