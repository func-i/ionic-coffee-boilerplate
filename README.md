# angular-ionic

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Initial Build

- npm install
- bower install
- grunt build
- ionic platform add android

## Developlment

- grunt serve

## Testing

- grunt test
  will run the unit tests with Karma and end-to-end tests with Protractor

The Protractor tests require you to run the Selenium server on your local machine. Install the Java Development Kit (JDK) if you don't have it on your system.

## Deploy to staging

Set up your deployment target (eg. gh-pages) in Gruntfile.js - buildcontrol

- grunt deploy

## Android deployment

- grunt build
- ionic build android
