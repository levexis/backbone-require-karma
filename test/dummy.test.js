/**
 * This is an example with chai loaded in via require and not using the chai plugin. It does not need backbone, see tag v0.1
 */
// this one is with manual chai load
define( ['chai' ] ,  function ( chai  ) {
    var should = chai.should();
    describe('A test', function() {
        it('should be a test', function () {
            true.should.be.ok;
        });
        it('should be another test', function () {
            true.should.be.ok;
        });
    })
});