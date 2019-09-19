/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have defined (url) properties',function(){

            // iterate through each feed in allFeeds array
            // PS: there is no need to ensure that allFeeds is
            // an array, since that part is already covered by
            // the first test above.

            allFeeds.forEach(function(feed){
                // the test requires ensuring that the url property exists
                // so we don't need to check its length, or validity of the URL
                expect(feed.url).toBeDefined();
            });
        });


        it('have valid (name) properties', function(){

            // iterate through each feed in allFeeds array
            allFeeds.forEach(function(feed){

                // ensure that feed.name property exists
                expect(feed.name).toBeDefined();

                // also ensure that the property string length exceeds zero
                expect(feed.name.length).not.toBe(0);
            });

        });
    });


    describe("The menu", function(){
        
        it("should be hidden by default", function(){
            // grab hold of the element that does the actual css hiding of the menu
            let body = $("body");

            // if body element has .menu-hidden at page load, then
            // the menu is hidden
            let menuIsHidden = $(body).hasClass("menu-hidden");

            expect(menuIsHidden).toBe(true);
        });
        
         it("should toggle visibility when its icon is clicked", function(){
             // grab hold of the icon responsible for toggling the menu
             let icon = $(".menu-icon-link").first();

             // grab hold of the element that affects the visibility of the menu
             let body = $("body");

             // simulate a single click on the icon
             icon.click();

             // now the menu should be visible, meaning:
             // the body element should not have .menu-hidden class
             let firstClickShowssMenu = !body.hasClass("menu-hidden");

             // simulate a second click
             icon.click();

             // now the menu should be hidden, meaning:
             // body element should have a .menu-hidden class
             let secondClickHidesMenu = body.hasClass("menu-hidden");
             
             expect(firstClickShowssMenu).toBe(true);
             expect(secondClickHidesMenu).toBe(true);


         });


    });
    

    describe("Initial Entries", function(){
        // async prep work
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it("should be loaded (at least 1)", function(done){

            // get the number of .entry elements within the .feed container
            let countOfEntries = $(".feed .entry").length;

            expect(countOfEntries).not.toBe(0);
            done();
        });

    });

    
    describe("New Feed Selection", function(){
        
        let contentsBeforeLoading = $(".feed").html();  // grab html of container
        let contentsAfterLoading;  // place holder for html after loading
        
        // async prep work
        beforeEach(function(done){
            // do the actual loading
            loadFeed(0, function(){
                done();
            });
        });

        it("should change .feed container after loading", function(done){
            // grab the html after loading is finished.
            contentsAfterLoading = $(".feed").html();

            // the html after loading should be different than before
            expect(contentsAfterLoading).not.toBe(contentsBeforeLoading);


            done();
        });


    });





}());
