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

- grunt test-unit
  runs unit tests with Karma

- grunt test-e2e
  runs end-to-end tests with Protractor

- grunt test
  runs both unit and end-to-end tests

The Protractor tests require you to run the Selenium server on your local machine. Install the Java Development Kit (JDK) if you don't have it on your system.

## Deploy to staging

Set up your deployment target (eg. gh-pages) in Gruntfile.js - buildcontrol

- grunt deploy

## Android deployment

- grunt build
- ionic build android
