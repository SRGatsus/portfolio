
export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchTeachers = () => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

};

export const setTeachers = (items) => ({
  type: 'SET_TEACHERS',
  payload: items,
});
