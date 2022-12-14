import {
  CREATE_POST,
  CREATE_POST_ERROR,
  CREATE_POST_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        profileData: action.payload,
      };

    case CREATE_POST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case CREATE_POST_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default editProfileReducer;
