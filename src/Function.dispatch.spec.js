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

    it('should pass event name in eventObject', function(done){
        function test(event){
            expect(event.name).toEqual(EVENT_NAME);
            done();
        }

        test.addEventListener(EVENT_NAME);

        Function.dispatch(EVENT_NAME);
    });

    it('should pass empty args array when there will not be custom arguments', function(done) {
       function test(event) {
           expect(event.args).toBeDefined();
           expect(event.args.length).toEqual(0);
           done();
       }

       test.addEventListener(EVENT_NAME);

        Function.dispatch(EVENT_NAME);
    });

    it('should pass custom arguments to eventObject', function(done){
        var arg1 = 'argument1';
        function test(event){

            expect(event.args.length).toEqual(4);
            expect(event.args[1]).toEqual(arg1);

            done();
        }

        test.addEventListener(EVENT_NAME);

        Function.dispatch(EVENT_NAME, 'arg0', arg1, 'arg2', 'arg3');
    })
});