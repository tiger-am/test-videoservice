import films from 'reducers/films';
import user from 'reducers/user';
import search from "reducers/search";
import {combineReducers} from "redux";

const rootReducer = combineReducers({films, user, search})

export default rootReducer