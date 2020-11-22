//Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var words = command.split(' ');
    var commandName = words[0];

    if (commandName === "ADD") return addContact(command);
    if (commandName === "REMOVE_PHONE") return removePhone(command);
    if (commandName === "SHOW") return show();


    function addContact() {
        var personName = words[1];
        var numbers = words[2].split(',');

        if (phoneBook.hasOwnProperty(personName)) {
            var oldNumbersArr = phoneBook[personName].split(', ');
            var newNumbersArr = oldNumbersArr.concat(numbers);
            phoneBook[personName] = newNumbersArr.join(', ');
        return;
        };

        phoneBook[personName] = numbers.join(', ');
    };

    function removePhone() {
        var number = words[1];
        var copy = {};

        for (var key in phoneBook)
            copy[key] = phoneBook[key];

        for (var key in phoneBook) {
            if (phoneBook[key] == number) delete phoneBook[key]; 
            else if (phoneBook[key].split(', ').indexOf(number) != -1) {
                var numbersArr = phoneBook[key].split(', ');
                for (var i = 0; i < numbersArr.length; i++) {
                    if (numbersArr[i] == number)
                        numbersArr.splice(i, 1);
                }
            phoneBook[key] = numbersArr.join(', ');
            }
        }

        if (JSON.stringify(copy) === JSON.stringify(phoneBook)) return false;
        else return true;
    };

    function show() {
        var res = [];
        var i = 0;
        for (var key in phoneBook) {
            res[i] = key + ': ' + phoneBook[key];
            i++;
        }
        return res.sort();
    };

    
};