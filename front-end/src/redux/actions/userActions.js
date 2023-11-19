export const setToken = (token) => (dispatch) => {
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
};

export const setUser = (user) => (dispatch) => {
  dispatch({
    type: "SET_USER",
    payload: user,
  });
};
