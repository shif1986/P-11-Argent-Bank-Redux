const initialState = {
    data: null,
    token: null,
    
  };
  
 const userReducer =  (state = initialState, action) => {
    switch (action.type) {
      case "SET_TOKEN":
        return {
          ...state,
          token:action.payload
        };
      case "SET_USER":
        return {
          ...state,
          data:action.payload
        };
     
      default:
        return state;
    }
  };
  export default userReducer