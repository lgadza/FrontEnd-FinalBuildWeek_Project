import {
  EDIT_SPECIFIC_EXPERIENCE,
  EDIT_SPECIFIC_EXPERIENCE_ERROR,
  EDIT_SPECIFIC_EXPERIENCE_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const editExpirienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SPECIFIC_EXPERIENCE:
      return {
        ...state,
        profileData: action.payload,
      };

    case EDIT_SPECIFIC_EXPERIENCE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_SPECIFIC_EXPERIENCE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default editExpirienceReducer;
