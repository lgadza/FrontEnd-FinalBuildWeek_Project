import { EDIT_POST, EDIT_POST_ERROR, EDIT_POST_LOADING } from "../actions";

const initialState = {
  post: undefined,
  isLoading: true,
  isError: false,
};

const editPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_POST:
      return {
        ...state,
        post: action.payload,
      };

    case EDIT_POST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case EDIT_POST_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default editPostReducer;
