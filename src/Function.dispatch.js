if(!Function.prototype.dispatch){
    Function.prototype.dispatch = function(eventName) {
        var listeners = Function._events[eventName] || [],
            listenersNumber = listeners.length,
            i,
            eventObject = {
                name: eventName,
                args: Array.prototype.slice.call(arguments, 1)
            };


        for(i = 0; i < listenersNumber; i++){
            listeners[i].handler(eventObject);
        }
    }
}