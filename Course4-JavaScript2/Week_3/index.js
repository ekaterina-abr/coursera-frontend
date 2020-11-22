/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    if (operations.length == 0) callback(null, []);
    else {
        var wasCB = false;
        var result = [];
        var operNumb = 0;
        operations.forEach(function(oper, index){
            oper(function next(err, res) {
                if (wasCB) return;
                if (err) {
                    callback(err);
                    wasCB = true;
                }
                else {
                    result[index] = res;
                    operNumb++;
                    if (operNumb == operations.length) callback(null, result);
                }
            });
        });
    }
};