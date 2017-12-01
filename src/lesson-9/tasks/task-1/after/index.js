'use strict';

class Timer {

    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.intervalId = 0;

    };

    getTime() {
        return {
            seconds: Math.ceil(this.seconds % 60),
            minutes: Math.floor(this.seconds / 60)
        }
    };

    startTimer(frequency = 1, timeLog) {
        return setInterval(() => {
            this.seconds +=  1 / frequency;
            timeLog(this.getTime())
        }, 1000 / frequency)
    };

    init(initValue = 0, timeLog = () => {console.log("Timer is configured")}) {
        if (typeof initValue !== 'number' || typeof timeLog !== 'function') {
            throw new Error("InitValue and timeLog should be number and function respectively")
        }
        this.seconds = initValue;
        timeLog();
    };

    start(frequency, timeLog) {
        if (typeof frequency !== 'number' || typeof timeLog !== 'function') {
            throw new Error("Frequency and timeLog should be number and function respectively")
        }
        timeLog(this.getTime());
        this.intervalId = this.startTimer(frequency, timeLog)
    };

    pause(timeLog) {
        if (typeof timeLog !== 'function') {
            throw new Error("TimeLog should be number and function respectively")
        }
        clearInterval(this.intervalId);
        timeLog(this.getTime())
    };

    stop(timeLog) {
        if (typeof timeLog !== 'function') {
            throw new Error("TimeLog should be number and function respectively")
        }
        clearInterval(this.intervalId);
        timeLog(this.getTime());
        this.seconds = 0;
    };

}

export default Timer;
