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

## The Expandable Header

This component works fine, but it is causing half the unit tests to fail when used on the home page.
The failing tests are:
```
Chrome 60.0.3112 (Mac OS X 10.12.6) Home Page should create component FAILED
	Error: Template parse errors:
	Can't bind to 'scrollArea' since it isn't a known property of 'expandable-header'.
	1. If 'expandable-header' is an Angular component and it has 'scrollArea' input, then verify that it is part of this module ...
    Expected false to be true.
    ...
Chrome 60.0.3112 (Mac OS X 10.12.6) Home Page should have a class member called modules that is an array FAILED
Chrome 60.0.3112 (Mac OS X 10.12.6) Home Page the modules class member should contain 5 modules after ionViewDidLoad has been triggered FAILED
Chrome 60.0.3112 (Mac OS X 10.12.6) Home Page the openModule() function should push the lesson select page onto the navigation stack FAILED
    ...
Chrome 60.0.3112 (Mac OS X 10.12.6): Executed 8 of 8 (4 FAILED) (2.788 secs / 2.714 secs)
```

