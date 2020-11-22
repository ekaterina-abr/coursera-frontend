module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.content = [];
}

Collection.prototype.constructor = Collection;

// Методы коллекции
Collection.prototype.values = function () {
    return this.content;
}
Collection.prototype.count = function () {
    return this.content.length;
}
Collection.prototype.at = function (position) {
    if ((position == 0) || (position > this.content.length)) 
        return null;
    else return this.content[position-1];
}
//другие методы
Collection.prototype.append = function (items) {
    if (typeof items == 'number' || typeof items == 'string') this.content.push(items);
    else if (typeof items == 'object') {
        for (var j = 0; j < items.content.length; j++)
            this.content.push(items.content[j]);
    }
}
Collection.prototype.removeAt = function (position) {
    if ((position <= 0) || (position > this.content.length)) 
        return false;
    else {
        this.content.splice(position-1, 1);
        return true;
    }
}


/**
 * Создание коллекции из массива значений
 */

Collection.from = function (arr) {
    var obj = new Collection();
    for (var i = 0; i < arr.length; i++)
        obj.append(arr[i]);
    return obj;
}