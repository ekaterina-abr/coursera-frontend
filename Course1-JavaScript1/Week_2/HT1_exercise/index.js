/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var arr = tweet.split(" ");
    var i;
    var res = [];
    for (i = 0; i < arr.length; i++)
        if (arr[i].startsWith("#") == true)
            res.push(arr[i].slice(1));
    return res;

};
