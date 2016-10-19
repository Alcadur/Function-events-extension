describe('removeEventListener', function(){
    var EVENT_NAME = 'event name';

    it('should remove listener from \'_events\' base on function \'_id\'', function(){

        function test1() {}
        function test2() {}

        test1.addEventListener(EVENT_NAME);
        test2.addEventListener(EVENT_NAME);

        test1.removeEventListener(EVENT_NAME);

        expect(Function._events[EVENT_NAME].length).toEqual(1);
        expect(Function._events[EVENT_NAME][0].functionId).toEqual(test2._id);
    });
});