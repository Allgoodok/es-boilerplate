'use strict';

const Timer = () => {
    let seconds = 0;
    let intervalId = 0;

    const getTime = () => ({
        seconds: Math.ceil(seconds % 60),
        minutes: Math.floor(seconds / 60)
    });

    const startTimer = (frequency = 1, timeLog) => setInterval(() => {
        seconds +=  1 / frequency;
        timeLog(getTime())
    }, 1000 / frequency);

    return {
        init: (initValue = 0, timeLog = () => {console.log("Timer is configured")}) => {
            if (typeof initValue !== 'number' || typeof timeLog !== 'function') {
                throw new Error("InitValue and timeLog should be number and function respectively")
            }
            seconds = initValue;
            timeLog();
        },
        start: function start(frequency, timeLog) {
            if (typeof frequency !== 'number' || typeof timeLog !== 'function') {
                throw new Error("Frequency and timeLog should be number and function respectively")
            }
            timeLog(getTime());
            intervalId = startTimer(frequency, timeLog)
        },
        pause: (timeLog)  => {
            if (typeof timeLog !== 'function') {
                throw new Error("TimeLog should be number and function respectively")
            }
            clearInterval(intervalId);
            timeLog(getTime())
        },
        stop: (timeLog) => {
            if (typeof timeLog !== 'function') {
                throw new Error("TimeLog should be number and function respectively")
            }
            clearInterval(intervalId);
            timeLog(getTime());
            seconds = 0;
        }
    }
};

export default Timer;
