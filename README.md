# TweetDashboard
This project (other than the Express server) was originally generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17. It has been updated to use angular-cli version 1.0.0-beta.26.

## Note about Windows vs. Unix development
Adjustments are needed to run the serve-build scripts - see package.json for details. Please be sure to remove the two lines that do not apply to your environment and also remove the notation after the ',' on the lines you keep or else your `npm install` will fail.
For example, `"build:nodeserver": "ng build && copy node_server\\* dist\\*", <--- Windows version` should look like this: `"build:nodeserver": "ng build && copy node_server\\* dist\\*",` if your environment is windows.

## Twitter API
Visit the [Twitter dev page](https://apps.twitter.com/) and create a basic application to gain access to necessary API credentials.
Set CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN_KEY, ACCESS_TOKEN_SECRET in `server.js`.

## Development server
Run `npm install` to install all dependencies (d3, express, socket.io, and twitter libs have been added to this otherwise stock Angular CLI project).
Run `npm run serve-build` for a dev server. Navigate to `http://localhost:3000/`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Further help
To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
To reach out to me personally, contact me on Twitter [@mattdionis](https://twitter.com/MattDionis)
