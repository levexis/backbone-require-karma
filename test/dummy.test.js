/**
 * Created by paulcook on 13/03/2014.
 */
console.log('run');

define( ['chai' ] ,  function ( chai  ) {
    console.log('loaded')
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