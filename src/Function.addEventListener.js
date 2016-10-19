if(!Function.prototype.addEventListener) {


    Function.prototype.addEventListener = function (eventName) {
        if(!eventName) {
            throw new Error('Event name is required!');
        }

        this._id = this._id || idGenerator.generate();

        Function._events[eventName] = Function._events[eventName] || [];

        Function._events[eventName].push({functionId: this._id, handler: this});

        return this;
    }
}