if(!Function.prototype.removeEventListener) {
    Function.prototype.removeEventListener = function (eventName) {
        var eventListeners = Function._events[eventName],
            listenersNumber = eventListeners.length,
            i;

        for(i = 0; i < listenersNumber; i++) {
            if(eventListeners[i].functionId === this._id){
                eventListeners.splice(i, 1);
                break;
            }
        }
    };
}