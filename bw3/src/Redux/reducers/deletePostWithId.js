import {
  DELETE_POST_WITH_ID,
  DELETE_POST_WITH_ID_ERROR,
  DELETE_POST_WITH_ID_LOADING,
} from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const deletePostWithIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST_WITH_ID:
      return {
        ...state,
        profileData: action.payload,
      };

    case DELETE_POST_WITH_ID_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case DELETE_POST_WITH_ID_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default deletePostWithIdReducer;
