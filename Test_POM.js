var page=require('./POM.js');

describe('Pom implementation', function() {
    it('Script-1', function() {
        page.get();
        page.sendInfo();
        page.verification();
    });
});