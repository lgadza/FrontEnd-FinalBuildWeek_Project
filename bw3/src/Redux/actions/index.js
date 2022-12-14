export const GET_PROFILE = "GET_PROFILE";
export const CREATE_POST = "CREATE_POST";
export const GET_POST = "GET_POST";
export const GET_PROFILE_EXPIRIENCE = "GET_PROFILE_EXPIRIENCE";
export const GET_SOMEONE_PROFILE = "GET_SOMEONE_PROFILE";
export const GET_MULT_PROFILES = "GET_MULT_PROFILES";
export const GET_MULT_PROFILES_LOADING = "GET_MULT_PROFILES_LOADING";
export const GET_PROFILE_LOADING = "GET_PROFILE_LOADING";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";
export const GET_MULT_PROFILES_ERROR = "GET_MULT_PROFILES_ERROR";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_LOADING = "EDIT_PROFILE_LOADING";
export const EDIT_PROFILE_ERROR = "EDIT_PROFILE_ERROR";
export const EDIT_SOMEONE_PROFILE_LOADING = "EDIT_SOMEONE_PROFILE_LOADING";
export const EDIT_SOMEONE_PROFILE_ERROR = "EDIT_SOMEONE_PROFILE_ERROR";
export const GET_PROFILE_EXPIRIENCE_LOADING = "EDIT_SOMEONE_PROFILE_LOADING";
export const GET_PROFILE_EXPIRIENCE_ERROR = "EDIT_SOMEONE_PROFILE_ERROR";
export const CREATE_POST_LOADING = "CREATE_POST_LOADING";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";
export const GET_POST_LOADING = "GET_SOMEONE_PROFILE_LOADING";
export const GET_POST_ERROR = "GET_SOMEONE_PROFILE_ERROR";

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
export const createPost = (textPost) => {
  return async (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8",
      },
      body: JSON.stringify(textPost),
    };
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: CREATE_POST,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: CREATE_POST_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: CREATE_POST_LOADING,
          payload: false,
        });
        dispatch({
          type: CREATE_POST_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: CREATE_POST_LOADING,
        payload: false,
      });

      dispatch({
        type: CREATE_POST_ERROR,
        payload: true,
      });
    }
  };
};
export const getPost = () => {
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
    const url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_POST,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_POST_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_POST_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_POST_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_POST_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_POST_ERROR,
        payload: true,
      });
    }
  };
};
export const getProfilDataExpereince = (userId) => {
  console.log(userId);
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
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`;
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_PROFILE_EXPIRIENCE,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_PROFILE_EXPIRIENCE_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_PROFILE_EXPIRIENCE_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_PROFILE_EXPIRIENCE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_PROFILE_EXPIRIENCE_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_PROFILE_EXPIRIENCE_ERROR,
        payload: true,
      });
    }
  };
};
export const getSomeoneProfilData = (userId) => {
  console.log(userId);
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
    const url = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_SOMEONE_PROFILE,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: EDIT_SOMEONE_PROFILE_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: EDIT_SOMEONE_PROFILE_LOADING,
          payload: false,
        });
        dispatch({
          type: EDIT_SOMEONE_PROFILE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: EDIT_SOMEONE_PROFILE_LOADING,
        payload: false,
      });

      dispatch({
        type: EDIT_SOMEONE_PROFILE_ERROR,
        payload: true,
      });
    }
  };
};
export const getMuiltiProfileData = (query) => {
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
    const url = `https://striveschool-api.herokuapp.com/api/profile/`;
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        dispatch({
          type: GET_MULT_PROFILES,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: GET_MULT_PROFILES_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: GET_MULT_PROFILES_LOADING,
          payload: false,
        });
        dispatch({
          type: GET_MULT_PROFILES_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: GET_MULT_PROFILES_LOADING,
        payload: false,
      });

      dispatch({
        type: GET_MULT_PROFILES_ERROR,
        payload: true,
      });
    }
  };
};
export const getProfileEdit = (editedProfile) => {
  return async (dispatch) => {
    const options = {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2ZWNmNGM5NmRmYjAwMTUyMWE1YjYiLCJpYXQiOjE2NzA4MzU0NDQsImV4cCI6MTY3MjA0NTA0NH0.OiSWNKNb0QBsvVyYlCXEefOvmeyzTcK6f2yax4u2JY8",
      },
      body: JSON.stringify(editedProfile),
    };
    const url = "https://striveschool-api.herokuapp.com/api/profile/";
    try {
      let response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        dispatch({
          type: EDIT_PROFILE,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: EDIT_PROFILE_LOADING,
            payload: false,
          });
        }, 100);
      } else {
        console.log("error");

        dispatch({
          type: EDIT_PROFILE_LOADING,
          payload: false,
        });
        dispatch({
          type: EDIT_PROFILE_ERROR,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);

      dispatch({
        type: EDIT_PROFILE_LOADING,
        payload: false,
      });

      dispatch({
        type: EDIT_PROFILE_ERROR,
        payload: true,
      });
    }
  };
};
