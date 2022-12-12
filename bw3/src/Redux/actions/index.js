export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    console.log("Fetching the books from the API...");
    try {
      //HEAR ADD YOUR CODE...
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProfilData = (query) => {
  console.log(query);
  return async (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8",
      },
    };
    const url = "https://striveschool-api.herokuapp.com/api/profile/me";
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log("Songs:", data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_PROFILE_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_PROFILE_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_PROFILE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_PROFILE_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_PROFILE_ERROR,
        payload: true,
      });
    }
  };
};
