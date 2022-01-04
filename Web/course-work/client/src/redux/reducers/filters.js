const initialState = {
    category: null,
    sortPopItems: null,
   
  };
  
  const filters = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
      return {
        ...state,
        sortPopItems: action.payload,
      };
    }
    if (action.type === 'SET_CATEGORY') {
      return {
        ...state,
        category: action.payload,
      };
    }
    return state;
  };
  
  export default filters;
  