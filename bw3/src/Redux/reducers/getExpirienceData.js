import {
  GET_EXPERIENCE,
  GET_EXPERIENCE_ERROR,
  GET_EXPERIENCE_LOADING,
} from "../actions";

const initialState = {
  expienceData: [],
  isLoading: true,
  isError: false,
};

const experienceData = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return {
        ...state,
        expienceData: action.payload,
      };

    case GET_EXPERIENCE_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_EXPERIENCE_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default experienceData;
