import {
  EDIT_PROFILE,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        profileData: action.payload,
      };

    case EDIT_PROFILE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_PROFILE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default editProfileReducer;
