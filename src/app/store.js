import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../featuers/user/UserSlice";
import movieReducer from "../featuers/movie/movieSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
