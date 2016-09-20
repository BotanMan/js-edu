'use strict';

(function(){
    /**
     * Parant class
     * @constructor
     */
    function Character(){
        this.nickname = 'Kitsune';
        this.health = 10;
        this.mana = 10;
        this.class = 'Just a human';
    }

    /**
     * Prototype function of Character
     * @returns {string}
     */
    Character.prototype.tellMeStory = function () {
        return 'Hello, my nickname is ' +
            this.nickname + ', i have ' +
            this.health + ' health and ' +
            this.mana + ' mana. My class is ' +
            this.class + ''
    };
    /**
     * Child class from Character
     * @constructor
     */
    function Archer() {
        Character.apply(this, arguments);
        this.class = 'Archer';
        this.armor = 10;
        this.dex = 7;
        this.str = 3;
    }
    Archer.prototype = Object.create(Character.prototype);
    Archer.prototype.constructor = Archer;
    /**
     * Prototype function of Archer
     * @returns {string}
     */
    Archer.prototype.lvlup = function () {
        this.health = this.health + 5;
        this.mana = this.mana + 5;
        this.dex = this.dex + 2;
        this.str = this.str + 1;
        return 'Congratulations! Your level up!' +
            '\n Health = ' + this.health +
            '\n Mana = ' + this.mana +
            '\n Dex = ' + this.dex +
            '\n Str = ' + this.str
    };
    /**
     * Child class from Archer
     * @constructor
     */
    function ShadowRunner() {
        Archer.apply(this, arguments);
        this.class = 'ShadowRunner';
        this.health = 21;
        this.armor = 17;
        this.dex = 13;
        this.str = 5;
    }
    ShadowRunner.prototype = Object.create(Archer.prototype);
    ShadowRunner.prototype.constructor = ShadowRunner;
    /**
     * Prototype function of ShadowRunner
     * @returns {string}
     */
    ShadowRunner.prototype.attack = function () {
        return 'You did ' + Math.floor(Math.random()*10) + ' damage'
    };
})();