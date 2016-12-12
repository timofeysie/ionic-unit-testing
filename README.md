# Ionic Unit Testing App

This project is a vanilla Ionic tabs starter app with the addition of the [Lathonez unit testing](http://lathonez.github.io/2016/ionic-2-unit-testing/) and the 
[e2e test blog](http://lathonez.github.io/2016/ionic-2-e2e-testing/).

The e23 tests can be run by first starting the server
```
$ ionic serve
```

Then running the tests in a separate terminal:
```
npm run e2e
```

The unit tests:
```
$ npm test


## Problems with the initial unit test setup

Out of the box, the unit tests were broken with the following output:
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

Lathonez showed that the cli version was the problem.  In the package.js:
```
-    "angular-cli": "^0.1.0",
+    "angular-cli": "1.0.0-beta.20-1",
```

He also removed references to the ClickersService and ClickersServiceMock from his clicker project in the test.ts file.  Now the tests run and pass.

## e2e tests

Going thru the [e2e test blog](http://lathonez.github.io/2016/ionic-2-e2e-testing/) (have to change the name of this repo now!).
The angular-cli.json Angular Cli’s config file is the same as the unit testing blog file.  No need to modify the package.json.
The protractor.conf.js Protractor’s config file however needed to be added, along with the e2e directory and its tsconfig.json file.
Out of the box, protractor is not found indicated by the red squiggly under the import in VSCode:
[ts] Cannot find module 'protractor'.

See if it runs:
```
$ ionic serve
******************************************************
 Dependency warning - for the CLI to run correctly,      
 it is highly recommended to install/upgrade the following:     
 Install ios-deploy to deploy iOS applications to devices.  `npm install -g ios-deploy` (may require sudo)
******************************************************
> ionic-hello-world@ ionic:serve /Users/timcurchod/repos/unitTestApp
> ionic-app-scripts serve
module.js:597
  return process.dlopen(module, path._makeLong(filename));
                 ^
Error: dlopen(/Users/timcurchod/repos/unitTestApp/node_modules/node-sass/vendor/darwin-x64-48/binding.node, 1): no suitable image found.  Did find:
	/Users/timcurchod/repos/unitTestApp/node_modules/node-sass/vendor/darwin-x64-48/binding.node: truncated mach-o error: segment __TEXT extends to 1212416 which is past end of file 16360
    at Error (native)
    at Object.Module._extensions..node (module.js:597:18)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/timcurchod/repos/unitTestApp/node_modules/node-sass/lib/index.js:23:15)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
npm ERR! Darwin 16.1.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "ionic:serve" "--"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! code ELIFECYCLE
npm ERR! ionic-hello-world@ ionic:serve: `ionic-app-scripts serve`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the ionic-hello-world@ ionic:serve script 'ionic-app-scripts serve'.
npm ERR! Make sure you have the latest version of node.js and npm installed.
...
```

I do indeed have the latest LTE version of Node installed.
```
$ node -v
v6.9.1
$ npm -v
3.10.8
```

Previous to the error above, we got this error with ionic serve:
```
Error: Missing binding /Users/timcurchod/repos/ehs-prototype-2/node_modules/node-sass/vendor/darwin-x64-48/binding.node
Node Sass could not find a binding for your current environment: OS X 64-bit with Node.js 6.x

Found bindings for the following environments:
  - OS X 64-bit with Node.js 5.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to build the binding for your current environment.
    at Object.<anonymous> (/Users/timcurchod/repos/ehs-prototype-2/node_modules/node-sass/lib/index.js:15:11)
    at Module._compile (module.js:570:32)
```

When trying to copy and paste the message, the clipboard was accidentally pasted into the terminal an executed so the terminal was closed and the clipboard buffer was lost again by accident.
However, this error appears in another project, so it's still relevant.

Following the advice fixes the issue:
```
$ npm rebuild node-sass
```

Then ionic serve will work.  So with the app served, it's time for the e2e tests:
```
$ npm run e2e
> ionic-hello-world@ e2e /Users/timcurchod/repos/unitTestApp
> protractor
[08:58:07] E/configParser - Error code: 105
[08:58:07] E/configParser - Error message: failed loading configuration file ./protractor.conf.js
[08:58:07] E/configParser - Error: Cannot find module 'jasmine-spec-reporter'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/Users/timcurchod/repos/unitTestApp/protractor.conf.js:5:20)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
npm ERR! Darwin 16.1.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "e2e"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! code ELIFECYCLE
npm ERR! ionic-hello-world@ e2e: `protractor`
npm ERR! Exit status 105
npm ERR! 
npm ERR! Failed at the ionic-hello-world@ e2e script 'protractor'.
```

So do this:
```
$ npm i jasmine-spec-reporter
```

Then, npm run e2e again and the error changes:
```
> protractor

/Users/timcurchod/repos/unitTestApp/node_modules/q/q.js:155
                throw e;
                ^

Error: Cannot find module 'ts-node'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at beforeLaunch (/Users/timcurchod/repos/unitTestApp/protractor.conf.js:25:5)
    at /Users/timcurchod/repos/unitTestApp/node_modules/protractor/built/util.js:45:49
    at Function.promise (/Users/timcurchod/repos/unitTestApp/node_modules/q/q.js:682:9)
    at Object.runFilenameOrFn_ (/Users/timcurchod/repos/unitTestApp/node_modules/protractor/built/util.js:37:16)
    at Object.initFn [as init] (/Users/timcurchod/repos/unitTestApp/node_modules/protractor/built/launcher.js:104:12)
    at Object.<anonymous> (/Users/timcurchod/repos/unitTestApp/node_modules/protractor/built/cli.js:112:10)
npm ERR! Darwin 16.1.0
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "e2e"
npm ERR! node v6.9.1
npm ERR! npm  v3.10.8
npm ERR! code ELIFECYCLE
npm ERR! ionic-hello-world@ e2e: `protractor`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the ionic-hello-world@ e2e script 'protractor'.
```


So do this:
```
$ npm i ts-node
```

Then again:
```
$ npm run e2eSpec started
  Ionic testing app
    ✓ should have a title
Executed 1 of 1 spec SUCCESS in 1 sec.
```

Hey, success!  We love it!


## Project setup for the unit tests

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
