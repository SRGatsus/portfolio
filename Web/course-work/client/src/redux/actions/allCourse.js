
export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCourse = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
}

export const setCourse = (items) => ({
  type: 'SET_COURSE',
  payload: items,
});
