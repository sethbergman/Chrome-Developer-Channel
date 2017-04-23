# \<Chrome Developer Channel\>
Shows for web developers
----------
![](https://raw.githubusercontent.com/sethbergman/Chrome-Developer-Channel/master/images/dev-channel.png)

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. 
```
npm install -g polymer-cli
```
Then run `polymer serve` to serve your application locally.

## Viewing Your Application

```
polymer serve
```

## Building Your Application

```
polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML, CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve from:

```
polymer serve build/bundled
```

## Running Tests

```
polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Deployment

This app was deployed with [Firebase](https://console.firebase.google.com/). It also utilizes Docker for containerization and dev/prod parity for future iterations.

