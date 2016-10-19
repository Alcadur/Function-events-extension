describe('idGenerator', function(){
    it('should generate ASCII chars string', function(){
        expect(idGenerator.asciiPart()).toBeDefined();
    });

    it('should ascii part length be between 10 and 30', function(){
        var asciiPart = idGenerator.asciiPart();

        expect(asciiPart.length).toBeGreaterThan(9);
        expect(asciiPart.length).toBeLessThan(31);
    });

    it('should postfix ascii part by timestamp', function(){
        spyOn(Date, 'now').and.returnValue('[timestamp]');

        var id = idGenerator.generate();

        expect(id).toContain('-');
        expect(Date.now).toHaveBeenCalled();
    });
});