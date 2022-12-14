import {
  GET_PROFILE_EXPIRIENCE,
  GET_PROFILE_EXPIRIENCE_ERROR,
  GET_PROFILE_EXPIRIENCE_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_EXPIRIENCE:
      return {
        ...state,
        profileData: action.payload,
      };

    case GET_PROFILE_EXPIRIENCE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_PROFILE_EXPIRIENCE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
