# Ionic Test Driven Development Project

This project provides a guide unit and e2e configuration along with a test driven development model cycle.

## Ionic Unit Testing Example
This project was originally based on the Lathonez Ionic testing example.  You can still see this older setup in the lathonez branch.

It was originally a vanilla Ionic tabs starter app with the addition of the [Lathonez unit testing](http://lathonez.github.io/2016/ionic-2-unit-testing/) and the 
[e2e test blog](http://lathonez.github.io/2016/ionic-2-e2e-testing/).


The current iteration is based on the [ionic-v2-branch](https://github.com/ionic-team/ionic-unit-testing-example/tree/ionic-v2-branch) which is a slightly modified version of the original to set it up for use with the Elite Ionic course.

Until Ionic adds testing features to new projects in the sometime in the future this is the recommended way to set up unit and e2e tests for an Ionic project.

## Getting Started

Run `npm i` in the root directory.


## Unit Tests

To run the tests, run `npm test`.

See the example test in `src/app/app.component.spec.ts` for an example of a component test.


## End-To-End Tests (Browser-Only)

To serve the app, run `ionic serve`.

To run the end-to-end tests, run (while the app is being served) `npm run e2e`.

See the example end-to-end test in `e2e/app.e2e-spec.ts`.
