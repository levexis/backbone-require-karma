/**
 * Created by paulcook on 13/03/2014.
 */

define( [ 'jquery', 'app' ] ,  function ( jquery, app  ) {
    var expect = chai.expect;
    describe('test backbone app', function() {
        describe('Home page should say hello world', function() {
            it('should be a test', function () {
                expect( $( '#main' ).html() ).to.contain('Hello World');
            });
        })
    });
});