'use strict';

var ModuleFirst = (function(){
    var module = {};
    /**
     * Cloning object
     * @param {object} dest
     * @param {object} src
     * @returns {object}
     */
    module.clone = function getClonedObject(dest,src) {
        if (src == null || "object" != typeof src) return src;
        for (var key in src) {
            if (src.hasOwnProperty(key)) {
                dest[key] = src[key];
            }
        }
        return dest;
    };
    /**
     * Get Keys of Object
     * @param {object} src
     * @returns {Array} keys
     */
    module.keys = function getKeysOfObject(src) {
        var keys = [];
        for (var key in src) {
            if (src.hasOwnProperty(key)) {
                keys.push(key)
            }
        }
        return keys;
    };
    /**
     * Get Values of Object
     * @param {object} src
     * @returns {Array} values
     */
    module.values = function getValuesOfObject(src) {
        var values = [];
        for (var value in src) {
            if (src.hasOwnProperty(value)) {
                values.push(src[value])
            }
        }
        return values;
    };
    /**
     * Function for each property
     * @param {object} src
     * @param {function} handler
     */
    module.forEach = function forEach(src, handler) {
        for (var key in Object(src)) {
            if (Object.prototype.hasOwnProperty.call(src, key) && key != 'constructor') {
                handler(src[key], key);
            }
        }
    };
    /**
     * Function filter
     * @param {object} src
     * @param {function} handler
     * @return {object}
     */
    module.filter = function filterProp(src, handler) {
        var filteredObj = {};
        for (var key in Object(src)) {
            if (Object.prototype.hasOwnProperty.call(src, key) && key != 'constructor') {
               if (handler(src[key], key)) {
                 filteredObj[key] = src[key];
               }
            }
        }
        return filteredObj
    };
    /**
     *Mapper function
     * @param {object} dest
     * @param {object} src
     * @param {Array} [args]
     * @return {object}
     */
    module.mapper = function mapperFunc(dest,src,args) {
        args = args || module.keys(src);
        for (var key in src) {
            if (src.hasOwnProperty(key) && ~args.indexOf(key)) {
                dest[key] = src[key]
            }
        }
        return dest
    };
    return module;
}());

var TelevisionModule = (function(){
    var module = {};
    var channels = [];
    var history = [];
    var currentChannel;
    var state;
    var televionStates = {
        'ON': 'ON',
        'OFF': 'OFF',
        'BROKEN': 'BROKEN'
    };
    /**
     * Add history info
     * @param info
     */
    function addToHistory(info) {
        history.push({
            time: Date.now(),
            action: info
        })
    }
    /**
     * Clear history info
     */
    function clearHistory() {
        history = [];
    }
    /**
     * Turning ON TV
     */
    module.turnON = function() {
        state = televionStates.ON;
        addToHistory('Включение')
    };
    /**
     * Turning OFF TV
     */
    module.turnOFF = function() {
      state = televionStates.OFF;
        clearHistory()
    };
    /**
     * Get status of TV
     * @returns {string}
     */
    module.getStatus = function() {
        addToHistory('Getting status');
        switch (televionStates) {
            case televionStates.ON:
                return 'Current chanel is ' + module.getCurrentChannel();
                break;
            case televionStates.OFF:
                return 'TV is OFF';
                break;
            case televionStates.BROKEN:
                return 'Your TV is broken';
                break;
            default:
                return 'Its not yours TV'
        }
    };
    /**
     * Refresh channels
     * @param {Array} refreshedChannels
     */
    module.refresh = function(refreshedChannels) {
        var refreshedChannels = refreshedChannels || [];
        for (var key in refreshedChannels) {
            refreshedChannels[key] = ModuleFirst.mapper({
                name: '',
                frequency: 1000,
                popularity: 1
            }, refreshedChannels[key], ['name', 'frequency', 'popularity'])
        }
        addToHistory('Channels was refreshed');
        channels = refreshedChannels
    };

    /**
     * Filter channels by popularity
     * @returns {Array}
     */
    module.getPopulars = function () {
        var popularChannels;
        popularChannels =  channels.sort(function(a, b) {
            return a.popularity - b.popularity;
        });
        addToHistory('Channels was sorted');
        return popularChannels
    };
    /**
     * Getting current channel
     * @returns {*}
     */
    module.getCurrentChannel = function() {
        addToHistory('Getting current channel');
        return currentChannel
    };
    module.switchToChannel = function() {
      return 'This module doesnt work now, try again later'
    };
    module.getStetistic = function () {
        return 'This module doesnt work now, try again later'
    };
    return module;
}());