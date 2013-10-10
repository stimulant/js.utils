var _moduleArray = function () {

    var _vars = {};

    return {

        internal: function(refs) {
            _vars = refs;

        },

        /**
         * Clean empty entries out of an existing array
         *
         * @param arr {Array} The array to be cleaned
         * @returns {Array} The new cleaned Array
         */
        cleanupArray: function (arr) {
            var newArr = [];

            if (arr && _vars.typedas.isArray(arr)) {
                arr.forEach(function (item) {
                    if (item !== null && item !== undefined) {
                        newArr.push(item)
                    }
                });
            }

            return newArr;
        },


        /**
         * Remove Array's item
         *
         * @param arr {Array} The given array
         * @param value {Object} The value to be removed
         * @returns {Array} The new Array
         */
        removeArrayItemByValue: function (arr, value) {
            var newArr = [],
                counter = 0;

            if (arr && _vars.typedas.isArray(arr)) {

                arr.forEach(function (item) {
                    if (item !== value && item !== null && item !== undefined) {
                        newArr.push(item);
                    }
                    counter++;
                });
            }

            return newArr;
        }
    };
}();

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        // nodejs support
        _moduleArray.internal({typedas: require("typedas")});
        module.exports = _moduleArray;

    }
} else {
    define(["typedas"], function (typedasref) {
        // browser support
        _moduleArray.internal({typedas: typedAs});
        return _moduleArray;
    });
}