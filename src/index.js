import React, { useEffect, useState } from "react";

// # UseNavigator is a hook that implements browser navigator interface functions
// The Navigator interface represents the state and the identity of the user agent. It allows scripts to
// query it and to register themselves to carry on some activities.
// MDN: https://developer.mozilla.org/en-US/docs/Web/API/Navigator
function useNavigator() {
  // # onLine - used as netWorkStatus
  // Returns the online status of the browser. The property returns a boolean value, with true meaning online and false meaning offline.
  const getNetworkStatus = () =>
    typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
      ? navigator.onLine
      : true;
  const [networkStatus, setNetworkStatus] = useState(getNetworkStatus());

  const setNetworkOnlineFunction = () => setNetworkStatus(true);
  const setNetworkOfflineFunction = () => setNetworkStatus(false);

  useEffect(() => {
    window.addEventListener("online", setNetworkOnlineFunction);
    window.addEventListener("offline", setNetworkOfflineFunction);

    return () => {
      window.removeEventListener("online", setNetworkOnlineFunction);
      window.removeEventListener("offline", setNetworkOfflineFunction);
    };
  }, []);

  // # geolocation - GPS position
  // Read-only property returns a Geolocation object that gives Web content access to the location of the device.
  // This allows a Web site or app to offer customized results based on the user's location.
  const [geoLocationStatus, setGeoLocationStatus] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setGeoLocationStatus(pos);
    });
  }, [setGeoLocationStatus]);
  let getCurrentPosition = geoLocationStatus;

  // # lang
  // Returns a DOMString representing the preferred language of the user, usually the language of the browser UI. The null value is returned when this is unknown.
  const [langStatus, setLangStatus] = useState(null);

  useEffect(() => {
    setLangStatus(navigator.language);
  }, [setLangStatus]);
  let language = langStatus;

  // # langs
  // Returns an array of DOMString representing the languages known to the user, by order of preference.
  const [langsStatus, setLangsStatus] = useState(null);

  useEffect(() => {
    setLangsStatus(navigator.languages);
  }, [setLangsStatus]);

  let languages = langsStatus;

  //# userAgent
  //Read-only property returns the user agent string for the current browser.
  const [userAgentStatus, setUserAgentStatus] = useState(null);

  useEffect(() => {
    setUserAgentStatus(navigator.userAgent);
  }, [setUserAgentStatus]);
  let userAgent = userAgentStatus;

  //# userAgentData
  //The userAgentData read-only property, can be used to access the User-Agent Client Hints API.
  const [userAgentDataStatus, setUserAgentDataStatus] = useState(null);

  useEffect(() => {
    setUserAgentDataStatus(navigator.userAgentData);
  }, [setUserAgentDataStatus]);
  let userAgentData = userAgentDataStatus;

  //# vendor
  //The value of the Navigator vendor property is always either "Google Inc.", "Apple Computer, Inc.", or (in Firefox) the empty string.
  const [userVendor, setUserVendor] = useState(null);

  useEffect(() => {
    setUserVendor(navigator.vendor);
  }, [setUserVendor]);
  let vendor = userVendor;

  // !------ further properties from the navigator to be added thru PRs.

  return {
    networkStatus,
    getCurrentPosition,
    language,
    languages,
    userAgent,
    userAgentData,
    vendor,
  };
}

export default useNavigator;
