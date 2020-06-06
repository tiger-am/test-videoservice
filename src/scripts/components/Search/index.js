import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "actions/search";
import { useHistory } from "react-router-dom";

export default function Search() {
    const [ filterState, setFilterState ] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        dispatch(setFilter(filterState));

        history.push('/films');
    }, [ dispatch, setFilter, filterState ]);

    const handleChange = useCallback((e) => {
        const value = e.target.value;

        setFilterState(value);

    }, [ setFilterState, filterState ]);

    return (
        <form
            className="search"
            onSubmit={handleSubmit}
        >
            <label className="input">
                <input
                    type="text"
                    name="search"
                    value={filterState}
                    onChange={handleChange}
                    className="input__field"
                    placeholder="Поиск..."
                />
            </label>

            <button type="submit" className="btn btn--secondary">Найти</button>
        </form>
    )
}
