/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var time = new Date(date);
    var resObject = {
        get value() {return formatDate(time);},
        add: function(number, type) {
            if (number < 0) throw TypeError("Отрицательное число");
            changeDate(time, number, type);
            return this;
        },
        subtract: function(number, type) {
            if (number < 0) throw TypeError("Отрицательное число");
            number = number * (-1);
            changeDate(time, number, type);
            return this;
        }
    };
    return resObject;


    function formatDate(date) {
        var fDate = {
            year: accZero(date.getFullYear()),
            month: accZero(date.getMonth() + 1),
            day: accZero(date.getDate()),
            hours: accZero(date. getHours()),
            minutes: accZero(date.getMinutes()),
        }
        return fDate.year + "-" + fDate.month + "-" + fDate.day + " " + fDate.hours + ":" + fDate.minutes;
    }


    function accZero(n) {
        if (n < 10)  n = "0" + n;
        return n;
    }


    function changeDate(date, number, type) {
        switch (type) {
            case "years":
                date.setFullYear(date.getFullYear() + number);
                break;
            case "months":
                date.setMonth(date.getMonth() + number);
                break;
            case "days":
                date.setDate(date.getDate() + number);
                break;
            case "hours":
                date.setHours(date.getHours() + number);
                break;
            case "minutes":
                date.setMinutes(date.getMinutes() + number);
                break;
            default:
                throw TypeError("Неправильная единица измерения");
            }

    }


};
