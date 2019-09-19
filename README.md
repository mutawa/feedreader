# Feed Reader Testing

This project satisfies the requirements of Udacity's Front-End Nanodegree Project #4. 
It is basically like an RSS Feed application, and the project is designed to make sure various functions and aspects of the application work and behave as expected.


## How to run the project

Locate the `index.html` file, and open it using an HTML5 browser, such as Chrome or Firefox.

## How can I tell if the test worked or not?

If you have managed to open `index.html` properly in your browser, the application should load and you shall see towards the bottom of the page something like:

```
    7 specs, 0 failures, randomized with seed 26687

    RSS Feeds
        have valid (name) properties
        have defined (url) properties
        are defined

    The menu
        should be hidden by default
        should toggle visibility when its icon is clicked

    Initial Entries
        should be loaded (at least 1)

    New Feed Selection
        should have different content for different feed url
```
If all of the above lines appear in green color, then all the test have passed. 
If, however, any test appears in red (with a cross icon before it), then that test had failed.

## If one/multiple tests fail, does this mean that this project submission is a failure?

Certainly not. At least, I hope not. Simply check if you have active connection to the Internet and that all the URLs the application is trying to access are not being blocked by your firewall. If your machine fails to connect with the urls in this application, then one test is designed to detect such case and is told to report it.

TL;DR: if you see (**X Initial Entries** should be loaded (at least 1)) with a red color, that might be an indication that your machine can't access the URLs in the application.

## Libraries/dependencies
   * [Jasmine](https://jasmine.github.io/)
   * [jQuery](https://jquery.com/)
