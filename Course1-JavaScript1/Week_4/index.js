/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var args = [].slice.call(arguments);
    var resArray = args[0];
    for (var i = 1; i < args.length; i++) {
        if (args[i].name == "filterIn") resArray = args[i].action(resArray);
    }
    for (var i = 1; i < args.length; i++) {
        if (args[i].name == "select")  resArray = args[i].action(resArray);
    }
    return resArray;

}

/**
 * @params {String[]}
 */
function select() {
    var args = [].slice.call(arguments);
    var obj = {
        name: "select",
        action: function(inArray) {
            var outArray = [];
            inArray.forEach(function(objItem, i, arr) {
                var outObj = {};
                args.forEach(function (argItem) {
                    if (objItem.hasOwnProperty(argItem))
                        outObj[argItem] = objItem[argItem];
                })
                outArray.push(outObj);
            });
            return outArray;
        }
    }
    return obj;

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var args = [].slice.call(arguments);
    var obj = {
        name: "filterIn",
        action: function(inArray) {
            var outArray = [];
            inArray.forEach(function(objItem) {
                var check = false;
                for (var i = 0; i < args.length; i += 2) {
                    var field = args[i];
                    var values = args[i + 1];
                    var check = values.some(function(item) {
                        return item == objItem[field];
                    });
                    if (!check)  break;
                }
                if (check)  outArray.push(objItem);
            })
            return outArray;
        }
    }
    return obj;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
