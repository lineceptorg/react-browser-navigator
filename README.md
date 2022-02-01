# Introduction

## A Single React Module to Access Browser Navigator Properties

This package serves as the React implementation of the [Navigator interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) (`windows.navigator`). Among other things, the Navigator interface allows us to get useful information out of the browser such as network connection (`onLine`) and the geographic coordinates of the browser (`geoLocation`).

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
  // Accessible Properties
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

<!-- ### getCurrentPosition

Implements `geolocation`.

```

// import the module
import useNavigator from 'react-browser-navigator';

function App() {
// Accessible Properties
let { getCurrentPosition } = useNavigator();

    return (
        <div>
            {networkStatus === true ? <span>We are online!</span> : <span>We are offline!</span>}
            {language && <span>{language}</span>}
        </div>
    );

}

``` -->

## Comprehensive Example

You can add the specific properties to `useEffect` as well in order to run side effects when data is obtained for a given property. [Lodash](https://www.npmjs.com/package/lodash) is required for some of the `useEffect` based usage.

```js
// import the useNavigator hook
import useNavigator from "react-browser-navigator";

function App() {
  // All Accessible Properties
  let {
    networkStatus,
    getCurrentPosition,
    language,
    languages,
    browserVer,
    userAgentData,
    vendor,
  } = useNavigator();

  // * Navigator Properties

  // networkStatus
  useEffect(() => {
    console.log("networkStatus", networkStatus);
  }, [networkStatus]);

  // getCurrentPosition
  useEffect(() => {
    if (!isNull(getCurrentPosition)) {
      console.log("getCurrentPosition", getCurrentPosition);
    }
  }, [getCurrentPosition]);

  // lang, langs
  useEffect(() => {
    if (!isNull(language) || !isNull(languages)) {
      console.log("language:", language);
      console.log("languages:", languages);
    }
  }, [language, languages]);

  // userBrowser
  useEffect(() => {
    if (!isNull(browserVer)) {
      console.log("userBrowser", browserVer);
    }
  }, [browserVer]);

  // userData
  useEffect(() => {
    if (!isNull(userAgentData)) {
      console.log("userData:", userAgentData);
    }
  }, [userAgentData]);

  // vendor
  useEffect(() => {
    if (!isNull(vendor)) {
      console.log("userVendor:", vendor);
    }
  }, [vendor]);

  return (
    <div>
      {networkStatus === true ? (
        <span>We are online!</span>
      ) : (
        <span>We are offline!</span>
      )}
      {language && <span>{language}</span>}
    </div>
  );
}
```

# Already Mapped Properties

|     **Property**     |                                                              Note                                                              |                               Type                                | Example |
| :------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------: | :-----: |
|   `networkStatus`    |                                            Detects if browser is offline or online.                                            |                              Boolean                              |   ❌    |
| `getCurrentPosition` |                                                    Geolocation of browser.                                                     | Object (`GeolocationPosition` including `coords` and `timestamp`) |   ❌    |
|      `language`      | The preferred language of the user, usually the language of the browser UI. The `null` value is returned when this is unknown. |                         String or `null`                          |   ❌    |
|     `languages`      |                                      Languages known to the user, by order of preference.                                      |                          Array of String                          |   ❌    |
|     `browserVer`     |                                           User agent string for the current browser.                                           |                              String                               |   ❌    |
|   `userAgentData`    |                        Gives access to information about the browser and operating system of the user.                         |                              Object                               |   ❌    |
|       `vendor`       |                     Always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.                     |                              String                               |   ❌    |

# Roadmap

We are planning to add more and more properties as well as other features.

## All Properties

| **Status** |  **Property**   |                                               **Notes**                                               | **Source**                                                               |
| :--------: | :-------------: | :---------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------ |
|     ❌     |  `connection`   | Provides a NetworkInformation object containing information about the network connection of a device. | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection    |
|     ❌     | `cookieEnabled` |                 Returns false if setting a cookie will be ignored and true otherwise.                 | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled |
|     ❌     |   ...more...    |                                              ...more...                                               | ..more...                                                                |

## Additional Features

| **Status** |       **Item**       |                   **Notes**                   |
| :--------: | :------------------: | :-------------------------------------------: |
|     ❌     |       Examples       | Example values for already addded properties. |
|     ❌     |     Adding Tests     | Test Coverage Creating and adding test cases. |
|     ❌     | Moving To Typescript |      Moving the codebase to TypeScript.       |

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
