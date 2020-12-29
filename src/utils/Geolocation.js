//  A promise that resolves with geo coordinates
export const getPosition = (options) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

export const getGeolocation = async () => {
  const geolocationData = await getPosition({ enableHighAccuracy: true });

  // destructruing the coordinates from the object
  const { latitude: lat, longitude: lng } = geolocationData.coords;

  // console.log(geolocationData.coords);
  return {
    lat,
    lng,
  };
};
