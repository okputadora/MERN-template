import api from '../../utils/apiRequests';
// ACTION TYPES
export const GET_USERS = 'GET_USERS_LOGIN';
export const POST_USER = 'USER_LOGOUT';
export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

// ACTION CREATORS
// receives payload from an action -- in this case username
export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    username,
  };
};

export const updatePassword = (password) => {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
};

// Asnyc action to check database for user
// after this action run userAuthenticated
export const userLogin = () => {
  return (dispatch, getState) => {
    const username = getState().loginReducer.username;
    const password = getState().loginReducer.password;
    api.userLogin(username, password)
    .then(response => {
      console.log(response)
      dispatch(userAuthenticated(response.data.result._id))
    })
  };
};

export const userAuthenticated = (userId) => {
  // if result is successful login log the user in
  return {
    type: USER_LOGIN,
    userId,
  };
};
