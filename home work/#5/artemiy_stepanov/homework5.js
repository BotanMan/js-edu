'use strict';
var Pagination = (function() {
    var module = {};
    /**
    * How much items should render on one page
    * @const {number}
    */
    var PAGE_SIZE = 5;
    /**
     * How much items should be in Array
     * @const {number}
     */
    var OBJECTS_TO_CREATE = 50;
    /**
    * Module for getting data from server
    */
    module.getData = function(){
        var dataArray = [];
        /**
        * Creating items
        * @constructor
        */
        function CreateData(){
            this.rating = Math.floor(Math.random() * 10);
            this.stars = Math.floor(Math.random() * 5 + 1);
            this.likes = Math.floor(Math.random() * 100);
        }
        for (var i = 0; i < OBJECTS_TO_CREATE; i++) {
            dataArray.push(new CreateData());
            }
        console.log(dataArray);
        return dataArray;
    };
    /**
    * Module for cutting Array to pages
    * @param {Array} (data) Array for slicing to pages
    * @return {Array} (itemsForRender)
    */
    module.getPages = function(data){
        var itemsForRender = [];
        for (var i = 0; i < Math.ceil(OBJECTS_TO_CREATE / PAGE_SIZE); i++) {
            var from = i * PAGE_SIZE;
            var to = from + PAGE_SIZE;
            itemsForRender.push(data.slice(from,to))
        }
        return itemsForRender;
    };
    /**
    * Render a current Page
    */
    module.currentPage = function(){
        
    };
    return module;
}());
