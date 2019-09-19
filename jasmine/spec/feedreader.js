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
                expect(feed.url).toBeDefined();

                // now we check that the url property is not empty (zero length string)
                expect(feed.url.length).not.toBe(0);
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
        
        let testReslts = [];  // this array is a place holder for test results
        
         let firstTestIsDone = false;  // flags to be used in async calls
        let secondTestIsDone = false;

        // async prep work
        beforeEach(function(done){
            // load the first url from allFeeds (arbitrary choice)
            loadFeed(0, function(){
                
                firstTestIsDone = true;
                // capture the html from the .feed element
                testReslts.push( $(".feed").html() );

                // in case the second test had finished before this test
                // only call done() if both tests are actually done
                if(secondTestIsDone) {
                    done();
                }
            });

            // load the second url from allFeeds (a different arbitrary choice)
            loadFeed(1, function(){

                // the second test is finished loading
                secondTestIsDone = true;

                // capture the output html from the .feed element
                testReslts.push( $(".feed").html() );

                // make sure to check with the first test if it is done
                // if so, then signal the done() to carry out the expect()
                // otherwise, the first test will do the call if it finishes last
                if(firstTestIsDone) {
                    done();
                }
            });
        });

        it("should have different content for different feed url", function(done){
            
            // at this point, this function should only be called
            // if the two tests above have been run.
            // this means that the testResults array should 
            // contain 2 elements. Let's make sure of that
            
            expect(testReslts.length).toBe(2);

            // at this point, the 2 elements in the array should have
            // different contents. Let's assert that as well.
            expect(testReslts[0]).not.toBe(testReslts[1]);

            done();    


            

        });


    });





}());
