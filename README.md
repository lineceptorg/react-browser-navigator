# Introduction

## A Single React Hook to Access Browser Navigator Properties

This package serves as the React implementation of the Navigator interface. The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

This package is intended to be used with any React project to access the brower’s `windows.navigator` property.

# Installation

```
npm install react-browser-navigator
```

# Usage

## In the browser

```
// import the useNavigator hook
import useNavigator from 'react-browser-navigator';


function App() {
    // Accessible Properties
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

# License

MIT License

Copyright (c) 2022 Linecept, David Kutas, Akos Toth

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
