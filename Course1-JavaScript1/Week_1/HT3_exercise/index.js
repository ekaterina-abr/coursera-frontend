/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var res, sum;
    hours = Number(hours);
    minutes = Number(minutes);
    interval = Number (interval);
    if (hours >= 0 && minutes >= 0 && interval >= 0) {
        sum = minutes + interval;
        while ( sum >= 60 ) {
            hours++;
            sum = sum - 60;
        }
        while ( hours >= 24 ) {
            hours = hours - 24;
        }
        if ( hours < 10 ) {
            if ( sum < 10 )  res = "0" + hours + ":0" + sum;
            else res = "0" + hours + ":" + sum;
        }
        else if ( sum < 10 )  res = hours + ":0" + sum;
             else res = hours + ":" + sum;

    return res;
    }
    else return NaN;
};
