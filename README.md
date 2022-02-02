# A Single React Module to Access Browser Navigator Properties

This package serves as the React implementation of the [Navigator interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) (`windows.navigator`). Among other things, the Navigator interface allows us to get useful information out of the browser such as **network connection** (`onLine`) and the **geographic coordinates** of the browser (`geoLocation`).

## LIVE DEMO

Follow the white rabbit: https://react-browser-navigator.netlify.app/

## GIF

![https://i.imgur.com/HbGVRcM.gif](https://i.imgur.com/HbGVRcM.gif)

# Installation

```
npm install react-browser-navigator
```

# Usage

## Quick Example

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // list accessible navigator properties (find them all below in a table)
  let { networkStatus } = useNavigator();

  return (
    <div>
      {networkStatus === true ? (
        <span>We are online!</span>
      ) : (
        <span>We are offline!</span>
      )}
    </div>
  );
}
```

## Property Based Examples

The following examples are giving ideas how the module can be used.

### networkStatus

Implements `Navigator.onLine`.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { networkStatus } = useNavigator();

  return (
    <div>
      {networkStatus === true ? (
        <span>We are online!</span>
      ) : (
        <span>We are offline!</span>
      )}
    </div>
  );
}
```

### geoLocation

Implements `Navigator.getCurrentPosition`. You can use the entire object, but for the sake of simplicity we just show the latitude and longitude here!

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { getCurrentPosition } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(getCurrentPosition)) {
      // printing out the entire object
      console.log("getCurrentPosition", getCurrentPosition);
    }
  }, [getCurrentPosition]);

  return (
    <div>
      <span>Latidude:</span> {getCurrentPosition?.coords.latitude}
      <br />
      <br />
      <span>Longitude:</span> {getCurrentPosition?.coords.longitude}
    </div>
  );
}
```

### language

Implements `Navigator.language`. The preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown. This gives back a simple string.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { language } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(language)) {
      // printing out the entire object
      console.log("language", language);
    }
  }, [language]);

  return (
    <div>
      <span>Language:</span> {language}
    </div>
  );
}
```

### languages

Implements `Navigator.languages`. Languages known to the user, by order of preference. This gives back an array of strings.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { languages } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(languages)) {
      // printing out the entire object
      console.log("languages", languages);
    }
  }, [language]);

  return (
    <div>
      <span>Languages:</span> {languages}
    </div>
  );
}
```

### userAgent

Implements `Navigator.userAgent`. User agent information (a string) for the current browser.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { userAgent } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(userAgent)) {
      // printing out the entire object
      console.log("userAgent", userAgent);
    }
  }, [userAgent]);

  return (
    <div>
      <span>userAgent:</span> {userAgent}
    </div>
  );
}
```

### userAgentData

Implements `Navigator.userAgentData`. Gives access to information about the browser and operating system of the user. This gives an object.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { userAgentData } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(userAgentData)) {
      // printing out the entire object
      console.log("userAgentData", userAgentData);
    }
  }, [userAgentData]);

  return (
    <div>
      <span>userAgentData:</span> {userAgentData}
    </div>
  );
}
```

### vendor

Implements `Navigator.vendor`. Always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string. This gives back a string.

```js
// import the module
import useNavigator from "react-browser-navigator";

function App() {
  // accessible properties
  let { vendor } = useNavigator();

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(vendor)) {
      // printing out the entire object
      console.log("vendor", vendor);
    }
  }, [vendor]);

  return (
    <div>
      <span>vendor:</span> {vendor}
    </div>
  );
}
```

# Already Mapped Properties

| Status |     **Property**     |                                                              Note                                                              |                               Type                                | Example |
| :----: | :------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------: | :-----: |
|   ✅   |   `networkStatus`    |                                            Detects if browser is offline or online.                                            |                              Boolean                              |   ✅    |
|   ✅   | `getCurrentPosition` |                                                    Geolocation of browser.                                                     | Object (`GeolocationPosition` including `coords` and `timestamp`) |   ✅    |
|   ✅   |      `language`      | The preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown. |                         String or `null`                          |   ✅    |
|   ✅   |     `languages`      |                                      Languages known to the user, by order of preference.                                      |                          Array of String                          |   ✅    |
|   ✅   |     `userAgent`      |                                           User agent string for the current browser.                                           |                              String                               |   ✅    |
|   ✅   |   `userAgentData`    |                        Gives access to information about the browser and operating system of the user.                         |                              Object                               |   ✅    |
|   ✅   |       `vendor`       |                     Always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.                     |                              String                               |   ✅    |

# Roadmap

We are planning to add more and more properties as well as other features.

## All Properties

| **No.** | **Status** |   **Property**   |                                               **Notes**                                               | **Source**                                                               |
| :-----: | :--------: | :--------------: | :---------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------ |
|    1    |     ❌     |   `connection`   | Provides a NetworkInformation object containing information about the network connection of a device. | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection    |
|    2    |     ❌     | `cookieEnabled`  |                 Returns false if setting a cookie will be ignored and true otherwise.                 | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled |
|    3    |     ❌     |  `presentation`  |                             Returns a reference to the Presentation API.                              | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/presentation  |
|    4    |     ❌     | `serviceWorker`  |    Provides access to registration, removal, upgrade, and communication for associated documents.     | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/serviceWorker |
|    5    |     ❌     |    `storage`     |               Returns the StorageManager object used for estimating available storage.                | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/storage       |
|    6    |     ❌     |   `webdriver`    |                     Indicates whether the user agent is controlled by automation.                     | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver     |
|    7    |     ❌     |   `doNotTrack`   |                       Reports the value of the user's do-not-track preference.                        | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack    |
|    8    |     ❌     |     `oscpu`      |                    Returns a string that represents the current operating system.                     | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu         |
|    9    |     ❌     |    `plugins`     |                  Returns a PluginArray listing the plugins installed in the browser.                  | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/plugins       |
|   10    |     ❌     | `setAppBadge()`  | Sets a badge on the icon associated with this app and returns a Promise that resolves with undefined. | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/setAppBadge   |
|   11    |     ❌     |    `share()`     |                     Invokes the native sharing mechanism of the current platform.                     | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share         |
|   12    |     ❌     |   `vibrate()`    |  Causes vibration on devices with support for it. Does nothing if vibration support isn't available.  | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate       |
|   13    |     ❌     | `getUserMedia()` |       After permission, returns the audio or video stream associated to a camera or microphone.       | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia  |

## Additional Features

|   **Status**   |       **Item**       |                   **Notes**                   |
| :------------: | :------------------: | :-------------------------------------------: |
| Partially Done |       Examples       |    Examples for already addded properties.    |
|       ❌       |     Adding Tests     | Test Coverage Creating and adding test cases. |
|       ❌       | Moving To Typescript |      Moving the codebase to TypeScript.       |

## Credits

Special thanks to:

- [MDN Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) - the Navigator represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

## Support the Authors

Do you like this project? Star the repository, spread the word - it really helps. You may want to follow
me on [Twitter](https://twitter.com/davidtkutas).

# License

MIT License

Copyright (c) 2022 Linecept, David Kutas, Akos Toth.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
