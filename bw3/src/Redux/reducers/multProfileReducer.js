import {
  GET_MULT_PROFILES,
  GET_MULT_PROFILES_ERROR,
  GET_MULT_PROFILES_LOADING,
} from "../actions";

const initialState = {
  profileData: [],
  isLoading: true,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MULT_PROFILES:
      return {
        ...state,
        profileData: action.payload,
      };

    case GET_MULT_PROFILES_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_MULT_PROFILES_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
