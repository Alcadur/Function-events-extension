describe('dispatch', function(){
    var EVENT_NAME = 'some event name';

    beforeEach(function(){
       delete Function._events[EVENT_NAME];
    });

    it('should call function after dispatch event', function(done){
        function test(){
            expect(true).toBeTruthy();
            done();
        }

        test.addEventListener(EVENT_NAME);

        Function.dispatch(EVENT_NAME);
    });

    it('should call all handlers bind to event', function(done){
        var wasTest1Call = false;

        function test1() {
            wasTest1Call = true;
        }

        test1.addEventListener(EVENT_NAME);

        function test2() {

            expect(wasTest1Call).toBeTruthy();
            done();
        }

        test2.addEventListener(EVENT_NAME);

        Function.dispatch(EVENT_NAME);
    });

    it('should not throw an error when there will be no event with given name', function(){
        expect(function() { Function.dispatch(EVENT_NAME) }).not.toThrowError();
    });

    it('should not throw an error when there will be no handler for event', function(){
       Function._events[EVENT_NAME] = [];

        expect(function(){ Function.dispatch(EVENT_NAME)}).not.toThrowError();
    });
});