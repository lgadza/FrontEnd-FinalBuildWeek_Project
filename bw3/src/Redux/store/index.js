import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import multProfileReducer from "../reducers/multProfileReducer";
import editProfileReducer from "../reducers/editProfile";
import getSomeoneProfile from "../reducers/getSomeoneProfile";
import getUserExperience from "../reducers/getUserExperience";
import createPost from "../reducers/createPostReducer";
import getPost from "../reducers/getPostReducer";
import postWithId from "../reducers/postWithId";
import deleteWithId from "../reducers/deletePostWithId";
import newExpirience from "../reducers/createNewExpirence";
import deleteExpirience from "../reducers/deteleExpirienceReducer";
import editExperience from "../reducers/editExpirience";
import getExpirience from "../reducers/getExpirienceData";
import editPost from "../reducers/editPost";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: "E1a2g3le",
    }),
  ],
};

const bigReducer = combineReducers({
  profile: profileReducer,
  profiles: multProfileReducer,
  edit: editProfileReducer,
  someoneProfile: getSomeoneProfile,
  userExperiences: getUserExperience,
  createPost: createPost,
  getPost: getPost,
  postWithId: postWithId,
  deletePost: deleteWithId,
  newExpirience: newExpirience,
  deleteExpirience: deleteExpirience,
  editExperience: editExperience,
  getExpirience: getExpirience,
  editPost: editPost,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
export const persistor = persistStore(store);
