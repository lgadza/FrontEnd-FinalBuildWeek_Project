import {
  GET_SOMEONE_PROFILE,
  EDIT_SOMEONE_PROFILE_ERROR,
  GET_PROFILE_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOMEONE_PROFILE:
      return {
        ...state,
        profileData: action.payload,
      };

    case GET_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_SOMEONE_PROFILE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
