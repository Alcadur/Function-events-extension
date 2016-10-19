describe('addEventListener', function () {
    var EVENT_NAME,
        BASE_EVENT_HANDLER;

    beforeEach(function(){
        EVENT_NAME = 'my event';
        BASE_EVENT_HANDLER = function(){};

        delete Function._events[EVENT_NAME];
    });

    it('should throw error when try add eventListener without name and callback', function(){
        expect(function(){
            function test() {}

            test.addEventListener();
        }).toThrowError('Event name is required!');

    });

    it('should bind as handler to \'this\'', function(){
        var called = false;
        function test(){
            called = true;
        }

        test.addEventListener(EVENT_NAME);

        Function._events[EVENT_NAME][0].handler();

        expect(called).toBeTruthy();
    });

    it('Function object should hve \'_events\' property', function(){
       expect(Function._events).toBeDefined();
    });

    it('Function \'_events\' property should be an JSON', function(){
        expect(JSON.stringify(Function._events)).toEqual('{}');
    });

    it('should \'Function._events\' length property default be 0', function() {
        expect(Function._events.length).toEqual(0);
    });

    it('should add even listener to global Function object', function(){
        function test() {}
        test.addEventListener(EVENT_NAME, function(){});

        expect(Function._events.length).toEqual(1);
    });

    it('should \'_events\' property have bind with handler', function() {
        function test(){}

        test.addEventListener(EVENT_NAME);

        expect(Function._events[EVENT_NAME][0].handler).toBe(test);
    });

    it('should add multi event handler to one event', function() {
        var customEventHandler = function(){};

        function test(){}

        test.addEventListener(EVENT_NAME, BASE_EVENT_HANDLER)
            .addEventListener(EVENT_NAME, customEventHandler);

        expect(Function._events[EVENT_NAME].length).toEqual(2);
    });

    it('should add to function \'_id\' property', function() {
        function test(){}

        test.addEventListener(EVENT_NAME, BASE_EVENT_HANDLER);

        expect(test._id).toBeDefined();
    });

    it('should function \'_id\' be unchange when add multiple events listener', function(){
        function test() {}

        test.addEventListener(EVENT_NAME, BASE_EVENT_HANDLER);
        var oldId = test._id;
        test.addEventListener(EVENT_NAME, BASE_EVENT_HANDLER);

        expect(test._id).toEqual(oldId);
    });

    it('should add to \'event object\' \'functionId\' property', function(){
        function test(){}

        test.addEventListener(EVENT_NAME);

        expect(Function._events[EVENT_NAME][0].functionId).toBeDefined();
    });

    it('should \'functionId\' to be equal function \'_id\'', function(){
       function test() {}

        test.addEventListener(EVENT_NAME);

        expect(Function._events[EVENT_NAME][0].functionId).toEqual(test._id);
    });

    it('should difference function have difference id', function(){
        function test1() {}
        function test2() {}

        test1.addEventListener(EVENT_NAME);
        test2.addEventListener(EVENT_NAME);

        expect(Function._events[EVENT_NAME][0].functionId).not.toEqual(Function._events[EVENT_NAME][1].functionId)
    });
});