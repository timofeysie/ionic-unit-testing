# Ionic Unit Testing App

This project is a vanilla Ionic tabs starter app with the addition of the [Lathonez unit testing](http://lathonez.github.io/2016/ionic-2-unit-testing/) setup.

Currently the unit tests are broken with the following output:
```
$ npm test

> ionic-hello-world@ test /Users/timcurchod/repos/unitTestApp
> ng test

⠋ BuildingNo angular-cli-build.js found. Please see the transition guide: https://github.com/angular-cli/angular-cli/blob/master/TRANSITION.md#user-content-brocfile-transition.
Error: No angular-cli-build.js found. Please see the transition guide: https://github.com/angular-cli/angular-cli/blob/master/TRANSITION.md#user-content-brocfile-transition.
    at Class.module.exports.Task.extend.setupBroccoliBuilder (/Users/timcurchod/repos/unitTestApp/node_modules/angular-cli/lib/models/builder.js:57:13)
    at Class.module.exports.Task.extend.init (/Users/timcurchod/repos/unitTestApp/node_modules/angular-cli/lib/models/builder.js:89:10)
    at new Class (/Users/timcurchod/repos/unitTestApp/node_modules/core-object/core-object.js:18:12)
    at Class.module.exports.Task.extend.run (/Users/timcurchod/repos/unitTestApp/node_modules/angular-cli/lib/tasks/build.js:15:19)
    at /Users/timcurchod/repos/unitTestApp/node_modules/angular-cli/addon/ng2/commands/test.js:63:30
    at tryCatch (/Users/timcurchod/repos/unitTestApp/node_modules/rsvp/dist/rsvp.js:538:12)
    at invokeCallback (/Users/timcurchod/repos/unitTestApp/node_modules/rsvp/dist/rsvp.js:553:13)
    at /Users/timcurchod/repos/unitTestApp/node_modules/rsvp/dist/rsvp.js:628:16
    at flush (/Users/timcurchod/repos/unitTestApp/node_modules/rsvp/dist/rsvp.js:2373:5)
    at doNTCallback0 (node.js:428:9)
npm ERR! Test failed.  See above for more details.
```

Created [an issue](https://github.com/lathonez/clicker/issues/188) for this error.

[This issue](https://github.com/angular/angular-cli/issues/2045) says: ```angular-cli-build.js file was removed when angular-cli migrated to webpack```.


## Project setup

The project was started like this:
```
$ ionic start --v2 unitTestApp tabs
$ npm install --save-dev @types/jasmine @types/node angular-cli codelyzer jasmine-core karma karma-chrome-launcher karma-cli karma-jasmine karma-mocha-reporter karma-remap-istanbul

Error: ENOENT: no such file or directory, open '/Users/timcurchod/repos/unitTestApp/www/index.html'
```

[This epic issue](https://github.com/driftyco/ionic-cli/issues/1420) details the pain others had with this error:
At the end it suggests:
```
$ npm install ionic@latest -g
$ npm install @ionic/app-scripts@latest --save-dev
$ npm run ionic:build
$ npm run ionic:serve
```

That fixes the issue.  next, the tests.
After the lengthy set up process, the tests fail with this output:
```
> ng test
Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
⠋ BuildingNo angular-cli-build.js found. Please see the transition guide: https://github.com/angular-cli/angular-cli/blob/master/TRANSITION.md#user-content-brocfile-transition.
```

That page referenced is a 404.
Searching for the path returns this issue which seems to be relevant:
https://github.com/angular/angular-cli/issues/1566

```
$ ng version
Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
angular-cli: 0.1.0
node: 5.0.0
os: darwin x64
mac-dog:unitTestApp timcurchod$
```

It suggested removing the ^ in this line in the package.json:
```
"angular-cli": "^0.1.0",
```
Doesn't work.  At the end of the issue someone (serhiisol) says:
Guys, this ticket already closed due to new releases of cli (for instance with beta 16 everything works as it should)
PS. Try to update to latest, should help
```
$ npm install -g angular-cli
$ npm i watchman
...
$ npm test
Looks like you have a different program called watchman, falling back to NodeWatcher.
```

It took about 30 minutes to install watchman.  Had to modify the permissions on a bunch of directories to link zx, etc.

Then we are back to the no angular-cli-build.js found error (see above).
