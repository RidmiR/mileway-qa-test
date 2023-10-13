# mileway-qa-test

This repository creates to add selected API (https://petstore.swagger.io/#/) and UI (http://uitestingplayground.com/) test cases.
This test project implemented with [cypress.io](https://www.cypress.io) test automation framework. 
 
## Pre Requisites

1. [Install Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)
2. Install npm 

## Setup build environment

1. Get the test repo from below link listed

    git clone git@github.com:RidmiR/mileway-qa-test.git

2. Install Cypress via npm

    * cd /your/project/path

    * npm install cypress --save-dev
    
   This will install Cypress locally as a dev dependency for your project.

   For specific cypress version,

    * npm install --save-dev cypress@10.9.0

4. Install Reporting dependencies

   * npm i --save-dev cypress-mochawesome-reporter

## Test execution

Cypress runs tests in a unique interactive runner that allows you to see commands as they execute while also viewing the application under test.
> npm run test

## Reports
In this test project I have integrated Mocha with Cypress to generate a report with a test execution summary.
Cypress is built on top of Mocha Javascript Framework, therefore any reporter built for Mocha can be used with Cypress.
* Report
Location,
> <MILEWAY_PROJECT_HOME>/cypress/reports/report.html
