# Introduction

## A Single React Module to Access Browser Navigator Properties

This package serves as the React implementation of the Navigator interface. The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

This package is intended to be used with any React project to access the brower’s `windows.navigator` property.

# Installation

```
npm install react-browser-navigator
```

# Usage

## Quick Example

```
// import the module
import useNavigator from 'react-browser-navigator';


function App() {
    // Accessible Properties
    let { networkStatus } = useNavigator();

    return (
        <div>
            {networkStatus === true ? <span>We are online!</span> : <span>We are offline!</span>}
            {language && <span>{language}</span>}
        </div>
    );
}

```

## Property Based Examples

The following examples are giving ideas how the module can be used.

### networkStatus

Implements `onLine`.

```

// import the module
import useNavigator from 'react-browser-navigator';

function App() {
// Accessible Properties
let { networkStatus } = useNavigator();

    return (
        <div>
            {networkStatus === true ? <span>We are online!</span> : <span>We are offline!</span>}
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

You can add the specific properties to `useEffect` as well in order to run side effects when data is obtained for a given property. Lodash is required for some of the `useEffect` based usage.

```

// import the useNavigator hook
import useNavigator from 'react-browser-navigator';

function App() {
// All Accessible Properties
let { networkStatus, getCurrentPosition, language, languages, browserVer, userAgentData, vendor } = useNavigator();

    // * Navigator Properties

    // networkStatus
    useEffect(() => {
        console.log('networkStatus', networkStatus);
    }, [networkStatus]);

    // getCurrentPosition
    useEffect(() => {
        if (!isNull(getCurrentPosition)) {
        console.log('getCurrentPosition', getCurrentPosition);
        }
    }, [getCurrentPosition]);

    // lang, langs
    useEffect(() => {
        if (!isNull(language) || !isNull(languages)) {
        console.log('language:', language);
        console.log('languages:', languages);
        }
    }, [language, languages]);

    // userBrowser
    useEffect(() => {
        if (!isNull(browserVer)) {
        console.log('userBrowser', browserVer);
        }
    }, [browserVer]);

    // userData
    useEffect(() => {
        if (!isNull(userAgentData)) {
        console.log('userData:', userAgentData);
        }
    }, [userAgentData]);

    // vendor
    useEffect(() => {
        if (!isNull(vendor)) {
        console.log('userVendor:', vendor);
        }
    }, [vendor]);

    return (
        <div>
            {networkStatus === true ? <span>We are online!</span> : <span>We are offline!</span>}
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
|     `languages`      |                                      Languages known to the user, by order of preference.                                      |                        Array of DOMString                         |   ❌    |
|     `browserVer`     |                                           User agent string for the current browser.                                           |                              String                               |   ❌    |
|   `userAgentData`    |                                                               x                                                                |                              Example                              |   ❌    |
|       `vendor`       |                     Always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.                     |                              String                               |   ❌    |

# Roadmap

We are planning to add more and more properties as well as other features.

## All Properties

| **Status** |  **Property**   |                                               **Notes**                                               | **Source**                                                               |
| :--------: | :-------------: | :---------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------ |
|     ❌     |  `connection`   | Provides a NetworkInformation object containing information about the network connection of a device. | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/connection    |
|     ❌     | `cookieEnabled` |                 Returns false if setting a cookie will be ignored and true otherwise.                 | https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled |
|     ❌     |      `xyz`      |                                                  xyz                                                  | xyz                                                                      |

## Additional Features

| **Status** |       **Item**       |                   **Notes**                   |
| :--------: | :------------------: | :-------------------------------------------: |
|     ❌     |       Examples       | Example values for already addded properties  |
|     ❌     |     Adding Tests     | Test Coverage Creating and adding test cases. |
|     ❌     | Moving To Typescript |       Moving to codebase to TypeScript.       |

# License

MIT License

Copyright (c) 2022 Linecept, David Kutas, Akos Toth

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
