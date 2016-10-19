if(!Function._events){
    Function._events = {};

    Object.defineProperty(Function._events, 'length', {
        get: function(){
            return Object.keys(Function._events).length;
        }
    });
}