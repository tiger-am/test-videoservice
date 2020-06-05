import React, {useCallback, useEffect} from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";
import classNames from "classnames";
import Baron from "react-baron/dist/es5";
import {useDispatch, useSelector} from "react-redux";
import useService from "hooks/useService";
import {fetchChannels} from "actions/channels";
import Spinner from "components/Spinner";


function Channels() {
    const {loading, getChannels: loadChannels} = useService();
    const dispatch = useDispatch();
    const channels = useSelector(({channels}) => channels.channels);

    const getChannels = useCallback(() => {
        dispatch(fetchChannels(loadChannels));
    }, [dispatch, fetchChannels, loadChannels]);


    useEffect(() => {
        getChannels();

    }, []);


    return (
        <main className="page container">
            <Nav/>

            <div className="channels">
                {loading ? <Spinner/> : (
                    <Baron
                        barOnCls="baron"
                        clipperCls="clipper"
                        scrollerCls="scroller"
                        trackCls="track"
                        barCls="bar"
                    >
                        {!!channels.length && (
                            <ul className="channel-list">
                                {channels.map(({id, logo, title, schedule}) => (
                                    <li key={id} className="channel-item">
                                        <div className="channel-item__logo">
                                            <div className="channel-item__image">
                                                <img src={logo} alt={title}/>
                                            </div>
                                        </div>

                                        <div className="channel-item__content">
                                            <div className="channel-item__title">{title}</div>

                                            <ul className="channel-item__schedule schedule-list">
                                                {schedule.map(({time, telecast}, index) => (
                                                    <li
                                                        className={classNames(
                                                            "schedule-list__item",
                                                            {'next': index === 0}
                                                        )}
                                                        key={`${id}-${time}`}
                                                    >
                                                        <span>{time}</span>
                                                        <span>{telecast}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        )}
                    </Baron>
                )}

            </div>
        </main>
    )
}

export default withLayout(Channels);