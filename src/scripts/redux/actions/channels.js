import { LOADED_CHANNELS_SUCCESS, LOADED_CHANNELS_FAILURE } from '../actionTypes'
import { useStorage } from "hooks/useStorage";

export const channelsLoaded = (channels) => ( {
    type: LOADED_CHANNELS_SUCCESS,
    payload: channels
} );

export const channelsFailed = (error) => ( {
    type: LOADED_CHANNELS_FAILURE,
    payload: error
} );

const { setData } = useStorage();

export const fetchChannels = getChannels => async (dispatch) => {
    try {
        const data = await getChannels();

        dispatch(channelsLoaded(data));
        setData('channels', data);

    } catch (error) {
        dispatch(channelsFailed(error));
    }
};
