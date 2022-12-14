import { GET_POST, GET_POST_ERROR, GET_POST_LOADING } from "../actions";

const initialState = {
  profileData: undefined,
  isLoading: true,
  isError: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        profileData: action.payload,
      };

    case GET_POST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_POST_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
