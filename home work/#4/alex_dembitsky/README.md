```js
function Computer() {
    var that = this,
        games = [];
    this.Games = function() {
        return games;
    }
}
Computer.prototype.Portability = function() {
    return false;
}
Computer.prototype.LAN = function() {
    return true;
}
Computer.prototype.WiFi = function() {
    return false;
}
var comp = new Computer();

function Phone() {
    var that = this;
    Computer.apply(that, arguments);
}
Phone.prototype = Object.create(Computer.prototype);
Phone.prototype.constructor = Phone;
Phone.prototype.Portability = function() {
    return true;
}
Phone.prototype.WiFi = function() {
    return true;
}
Phone.prototype.GSM = function() {
    return true;
}
Phone.prototype.GPS = function() {
    return true;
}
Phone.prototype.LAN = function() {
    return false;
}
var tel = new Phone();

function TheTablet() {
    var that = this;
    Phone.apply(that, arguments);
}
TheTablet.prototype = Object.create(Phone.prototype);
TheTablet.prototype.constructor = TheTablet;
TheTablet.prototype.GSM = function() {
    return false;
}
TheTablet.prototype.LAN = function() {
    return true;
}
var tablet = new TheTablet();
```
