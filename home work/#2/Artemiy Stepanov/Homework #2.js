(function(){
    /**
     * #1 Function Fabric
     * @param {filter} filterId
     * @return {function}
     */

    var filterId = {
        'SUM': '1',
        'MULT': '2',
        'DIV': '3'
    };
    var getFunction = function(filter) {
        switch (filter) {
            case filterId.SUM :
                /**
                 * Addition function
                 * @param {number} a
                 * @param {number} b
                 */
                var getSum = function(a,b) {
                    console.log(a + b)
                };
                return getSum;
            case filterId.MULT :
                /**
                 * Multiplication function
                 * @param {number} a
                 * @param {number} b
                 */
                var getMult = function(a,b) {
                    console.log(a * b)
                };
                return getMult;
            case filterId.DIV :
                /**
                 * Division function
                 * @param {number} a
                 * @param {number} b
                 */
                var getDiv = function(a,b) {
                    console.log(a / b)
                };
                return getDiv;
            default :
                break;
        }
    };
    // Modificated variant
    /**
     * Modificated variant
     * @param {filter} filter
     * @param {number} a
     * @param {number} b
     */

    var doMath = function(filter,a,b) {
        switch (filter) {
            case filterId.SUM :
                /**
                 * Addition function
                 * @param {number} a
                 * @param {number} b
                 */
                var getSum = function(a,b) {
                    console.log(a + b)
                };
                return getSum(a,b);
            case filterId.MULT :
                /**
                 * Multiplication function
                 * @param {number} a
                 * @param {number} b
                 */
                var getMult = function(a,b) {
                    console.log(a * b)
                };
                return getMult(a,b);
            case filterId.DIV :
                /**
                 * Division function
                 * @param {number} a
                 * @param {number} b
                 */
                var getDiv = function(a,b) {
                    console.log(a / b)
                };
                return getDiv(a,b);
            default :
                break;
        }
    };
}());

(function(){
    /**
     * #2 Object clone
     * @param {object} object
     * @return {object} cloned object
     */
    var getCloneOfObject = function(object) {
        var clone = Object.assign({}, object);
        return clone;
    };
    /**
     * Making a link for object
     * @param {object} object
     * @returns {*}
     */
    var getLinkOfObject = function(object) {
      var objectLink = object;
        return objectLink;
    };
    /**
     * Modificated variant
     * @param {object} object
     * @return {string}
     */
    var getClonedObjectProp = function(object) {
        var clone = Object.assign({}, object);
        var stringOfProp = '';
        var cloneKey;
        for (cloneKey in clone) {
            stringOfProp += clone[cloneKey] + " ";
        }
        return stringOfProp;
    }
}());

(function(){
    /**
     * #3 Conveyor calls
     * Stage #1
     */
    /**
     * Функция для первой буквы
     * @param {string} str
     * @return {string}
     */
    var firstLetterUp = function(str) {
        var strWithLetterUp = str[0].toUpperCase() + str.slice(1);
        return strWithLetterUp;
    };
    /**
     * Функция для случайной буквы
     * @param {string} str
     * @return {string}
     */
    var randomLetterUp = function(str) {
        var y = str.length;
        var e = Math.floor(Math.random()*y);
        var strWithRandomLetterUp = (str.substring(0,e) + str[e].toUpperCase() + str.substring(e + 1))
        return strWithRandomLetterUp;
    };
    /**
     * Функция для последней буквы
     * @param {string} str
     * @return {string}
     */
    var lastLetterUp = function(str) {
        var y = str.length;
        var e = Math.floor(Math.max(y) - 1);
        var strWithLastLetterUp = str.substring(0,e) + str[e].toUpperCase();
        return strWithLastLetterUp;
    };
    // -----------------------------------------------------------------------
    /**
     * Stage #2
     * @param {string} str
     * @return {string}
     */
    var funcArray = [
        firstLetterUp, randomLetterUp, lastLetterUp
    ];
    var makeMyStringAwesome = function(str) {
        var first = funcArray[0](str);
        var random = funcArray[1](first);
        var last = funcArray[2](random);
        return last;
    };
    // -----------------------------------------------------------------------
    /**
     * Stage #3
     * @param {string} str
     * @param {number} num
     * @return {string}
     */
    var makeMyStringAwesomeRandomly = function(str,num) {
        var resultStr = str;

        for (var i = 0; i <= num; i++) {
            var randomize = Math.floor(Math.random() * funcArray.length);
            var newFunc = funcArray[randomize];
            resultStr = newFunc(resultStr);
        }

        return resultStr;
    }
}());

(function(){
    
}());

