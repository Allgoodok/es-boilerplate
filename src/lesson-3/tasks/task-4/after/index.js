const Timer = () => new function () {
    this.minutes = 0;
    this.seconds = 0;
    this.isStopped = false;

    const startTimer = (frequency, timeLog) => setInterval(() => {
        let secondsTmp = new Date().getSeconds() - this.seconds;
        let minutesTmp = new Date().getMinutes() - this.minutes;
        timeLog({
            seconds: secondsTmp,
            minutes: minutesTmp
        })
    }, 1000 / frequency);
    return {
        init: (initValue = 0, timeLog = () => {console.log("Timer is configured")}) => {
            this.isStopped = false;
            this.seconds = new Date().getSeconds() + initValue % 60;
            this.minutes = new Date().getMinutes() + ((initValue - (initValue % 60)) / 60);
            timeLog();
        },
        start: function start(frequency, timeLog) {
            if (this.isStopped === false) {
                startTimer(frequency, timeLog)
            } else {
                this.isStopped = false;
                startTimer(frequency, timeLog)
            }
        },
        pause: (timeLog)  => {
            let secondsTmp = 0;
            let minutesTmp = 0;
            this.isStopped = true;
            (() => {
                secondsTmp = new Date().getSeconds() - this.seconds;
                minutesTmp = new Date().getMinutes() - this.minutes;
            })();
            timeLog({
                seconds: secondsTmp,
                minutes: minutesTmp
            })
        },
        stop: (timeLog) => {
            let secondsTmp = 0;
            let minutesTmp = 0;
            this.isStopped = true;
            (() => {
                secondsTmp = new Date().getSeconds() - this.seconds;
                minutesTmp = new Date().getMinutes() - this.minutes;
            })();
            timeLog({
                seconds: secondsTmp,
                minutes: minutesTmp
            });
            this.seconds = 0;
            this.minutes = 0;
        }
    }
};

export default Timer;
