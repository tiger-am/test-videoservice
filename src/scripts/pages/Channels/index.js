import React from "react";
import withLayout from "components/HOC/withLayout";
import Nav from "components/Nav";
import classNames from "classnames";
import Baron from "react-baron/dist/es5";

const channels = [
    {
        id: 11111,
        title: 'Первый канал',
        logo: '/src/images/TMP/logo1.png',
        schedule: [
            {time: '13:00', telecast: 'Новости (с субтитрами)'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
    {
        id: 22222,
        title: '2x2',
        logo: '/src/images/TMP/logo2.png',
        schedule: [
            {time: '13:00', telecast: 'Сериал'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
    {
        id: 33333,
        title: 'РБК',
        logo: '/src/images/TMP/logo3.png',
        schedule: [
            {time: '13:00', telecast: 'Пусть покупают'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
    {
        id: 44444,
        title: 'AMEDIA PREMIUM',
        logo: '/src/images/TMP/logo4.png',
        schedule: [
            {time: '13:00', telecast: 'Убить Билла'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
    {
        id: 55555,
        title: 'Второй канал',
        logo: '/src/images/TMP/logo1.png',
        schedule: [
            {time: '13:00', telecast: 'Мультфильм'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
    {
        id: 66666,
        title: 'Третий канал',
        logo: '/src/images/TMP/logo2.png',
        schedule: [
            {time: '13:00', telecast: 'Матрица'},
            {time: '14:00', telecast: 'Давай поженимся'},
            {time: '15:00', telecast: 'Другие новости'},
        ]
    },
]

function Channels() {
    return (
        <main className="page container">
            <Nav/>

            <div className="channels">
                <Baron
                    barOnCls="baron"
                    clipperCls="clipper"
                    scrollerCls="scroller"
                    trackCls="track"
                    barCls="bar"
                >
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
                </Baron>
            </div>
        </main>
    )
}

export default withLayout(Channels);