/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './TopMenu.scss';
import { ReactComponent as IconClock } from '../../images/icon-clock.svg';
import { modifyDate, modifyMonth, monthes } from '../../utils/variables';

export const TopMenu = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);
  const [activeSessions, setActiveSessions] = useState(0);

  const timer = () => {
    setDate(new Date());
    setYear(date.getFullYear());
    setDay(date.getDate());
    setMonth(monthes[date.getMonth()]);
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  };

  useEffect(() => {
    const interval = setInterval(timer, 1000);

    return () => clearInterval(interval);
  }, [date]);

  useEffect(() => {
    const socket = io(''); // input your socket.io server url

    socket.on('activeSessions', (sessions: number) => {
      setActiveSessions(sessions);
    });

    return () => {
      socket.disconnect();
    };
  }, [activeSessions]);

  return (
    <>
      <div className="date">
        <div className="date__day">Tuesday</div>
        <div className="date__current">
          <div className="date__current-full-date">{`${day} ${modifyMonth(month)}. ${year}`}</div>
          <div className="date__current-time">
            <div className="date__current-time-icon">
              <IconClock className="icon-clock" />
            </div>
            <div className="date__current-time-timer">{`${modifyDate(hours)}: ${modifyDate(minutes)}: ${modifyDate(seconds)}`}</div>
          </div>
        </div>
      </div>
      <div className="active-sessions">{`Active sessions: ${activeSessions}`}</div>
    </>
  );
};
