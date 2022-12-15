import {
  GET_POST_WITH_ID,
  GET_POST_WITH_ID_ERROR,
  GET_POST_WITH_ID_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const postWithIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_WITH_ID:
      return {
        ...state,
        profileData: action.payload,
      };

    case GET_POST_WITH_ID_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_POST_WITH_ID_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default postWithIdReducer;
