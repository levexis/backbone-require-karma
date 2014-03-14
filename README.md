backbone-require-karma
======================

Basic requirejs backbone app test examples with karma and sinon.

Creates a basic backone application that loads a default view that says hello world. You can see this by typing node app.js and going to http://localhost:8000/

Tag v0.1 shows you how to do a basic requireJS and phantom setup. It loads chai separately and an example test is in test/dummy.test.js

Tag v0.2 shows you how to set up for our basic backbone application:
- All files for requiring must be defined in karma.conf.js so they are generated as part of the karma build. If you get errors like timetamp does not exist that means that the requirejs adapter cannot find the file. Switch on log level info to see the files that are being loaded and you can always add a
console statement to the adaptor to log you url and files when this timestamp error occurs.
- You need to add the orginal main.js used by requirejs to the exclude list and create a new one, mine is in test/main.js
- You will need to document.write any target elements in main.js, I created a div with id #main.
- Same would go for an style sheets I assume
- You can see an example test in test/app.test.js, i just require my app.js here which bootstraps the application.
- For more info on Backbone testing see http://backbone-testing.com/ , the book provides a great overview and all the examples are in https://github.com/ryan-roemer/backbone-testing
