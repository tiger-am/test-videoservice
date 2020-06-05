import films from 'reducers/films';
import user from 'reducers/user';
import search from 'reducers/search';
import channels from 'reducers/channels'
import {combineReducers} from "redux";

const rootReducer = combineReducers({films, user, search, channels});

export default rootReducer