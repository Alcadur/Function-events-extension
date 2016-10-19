if(!Function.prototype.dispatch){
    Function.prototype.dispatch = function(eventName) {
        var listeners = Function._events[eventName] || [],
            listenersNumber = listeners.length,
            i;

        for(i = 0; i < listenersNumber; i++){
            listeners[i].handler();
        }
    }
}