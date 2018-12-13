var counter = (function() {
    
    var _number;
    
    var _checkInteger = function(userNumber){
        return (userNumber^0) === userNumber;
    }
    
    var setValue = function(userNumber){
        if (_checkInteger(userNumber)){
            _number = userNumber;
        } else {
           console.log("Неверное значение."); 
        }
        
    }
    
    var increaseCounter = function(){
        _number++;
    }
    
    var decreaseCounter = function(){
        _number--;
    }
    
    var printCounter = function(){
        console.log(_number);
    }
    
    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    }
}())

counter.setValue(20);
counter.printCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();