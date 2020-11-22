/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    var arr = [];
    for (var i = 0; i < hashtags.length; i++)
        arr[i] = hashtags[i].toLowerCase();
    for (i = 0; i < arr.length - 1; i++)
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j])  {
                arr.splice(j, 1);
                j--;
            }
    var str = arr.join(", ");
    return str;
};
