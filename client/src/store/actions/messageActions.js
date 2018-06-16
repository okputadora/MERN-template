import googlePlaces from '../../utils/googlePlaces' // consider just combining this with apiRequests
// ACTION TYPES
export const GET_MESSAGE = 'UPDATE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_LOCATION = 'GET_LOCATION'

// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateMessage = (message) => {
  return {
    type: UPDATE_MESSAGE,
    message,
  }
}
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message,
  };
};

// Async action to lookup neighborhood from geoCoords
export const getLocation = (lat, lng) => {
  console.log("lat, lng ", lat, lng)
  return dispatch => {
    // googlePlaces.getNeighborhood for outside of philly -- we'll add cities as we go
    console.log("in here")
    googlePlaces.getNeighborhood(lat, lng)
    .then(result => {
      dispatch(submitLocation(result, lat, lng));
    })
    .catch(err => {
      console.log("error getting neighborhood name")
      console.log(err)
    });
  };
};

export const submitLocation = (location, lat, lng) => {
  return {
    type: GET_LOCATION,
    neighborhood: location.neighborhood,
    lat,
    lng,
    geometry: location.geometry,
    messages: location.chat,
    locationId: location.id
  };
}
