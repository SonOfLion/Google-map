export const loadMapApi = () => {
  const mapsUrl = `https://maps.google.com/maps/api/js?
  key=${ process.env.REACT_APP_GOOGLE_MAPS_API_KEY }&libraries=places&language=no&v=quarterly`;
  const scripts = document.getElementsByTagName('script');

  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].src.indexOf(mapsUrl) === 0) {
      return scripts[i];
    }
  }

  const googleMapScript = document.createElement('script');
  googleMapScript.src = mapsUrl;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);

  return googleMapScript;
}