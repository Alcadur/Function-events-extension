window.idGenerator = (function(Date){
    function intFromRange(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function Generator(){

    }

    Generator.prototype.asciiPart = function(currentChars, left){
        var charCode = intFromRange(40, 126);
        currentChars = currentChars || '';

        left = left || intFromRange(11, 31);

        if(left === 1){
            return currentChars;
        }

        return this.asciiPart(currentChars + String.fromCharCode(charCode), --left);
    };

    Generator.prototype.generate = function(){
        return this.asciiPart() + '-' + Date.now();
    };

    return new Generator();
})(window.Date);