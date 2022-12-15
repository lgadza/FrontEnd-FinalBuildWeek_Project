import {
  DELETE_SPECIFIC_EXPERIENCE,
  DELETE_SPECIFIC_EXPERIENCE_ERROR,
  DELETE_SPECIFIC_EXPERIENCE_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const deleteExpirienceWithIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SPECIFIC_EXPERIENCE:
      return {
        ...state,
        profileData: action.payload,
      };

    case DELETE_SPECIFIC_EXPERIENCE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case DELETE_SPECIFIC_EXPERIENCE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default deleteExpirienceWithIdReducer;
