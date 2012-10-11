Array.prototype.erase = function(elm) {
    var index = this.indexOf(elm);
    if(index !== -1){
     this.splice(index, 1);
    }
    return this;
};

randfloat = function(min, max){
    return Math.random()*(max-min)+min;
};

printIn = function(str){
    document.write(str);
    document.write("<br />");
};