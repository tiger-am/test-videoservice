import {LOADED_CHANNELS_SUCCESS, LOADED_CHANNELS_FAILURE} from '../actionTypes'

const channelsLoaded = (channels) => ({
    type: LOADED_CHANNELS_SUCCESS,
    payload: channels
});

const channelsFailed = (error) => ({
    type: LOADED_CHANNELS_FAILURE,
    payload: error
});


const fetchChannels = getChannels => async (dispatch) => {
    try {
        const data = await getChannels();

        dispatch(channelsLoaded(data))

    } catch (error) {
        dispatch(channelsFailed(error))
    }
};

export {fetchChannels}

