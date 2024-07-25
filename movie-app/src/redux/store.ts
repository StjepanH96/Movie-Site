import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './reducers/movies/movieSlice';

export const movieStore = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type AppDispatch = typeof movieStore.dispatch;
export type RootState = ReturnType<typeof movieStore.getState>;
export type AppStore = typeof movieStore;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;