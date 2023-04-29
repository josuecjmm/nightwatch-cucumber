# nightwatch-cucumber

This is a nightwatch framework project for Test Automation:

* Using cucumber-js
* Page Object Model
* Capabilities for chromedriver

### Installation

Install the dependencies:

```sh 
npm install
```

Run the tests:

```sh 
npm test
```
![](https://github.com/josuecjmm/nightwatch-cucumber/blob/main/gif/run.gif)

### Project Structure

```sh 
# nightwatch configurations
./nightwatch.conf.js


# .js files for managing selectors and methods
./page_objects 


# .feature to define Gherkin steps
./test/features/nightwatch 


# .js with the logic of Gherkin steps
./test/features/nightwatch/step_definitions 
```
