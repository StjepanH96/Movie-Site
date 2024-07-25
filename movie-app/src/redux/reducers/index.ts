import { combineReducers } from 'redux';
import moviesReducer from './movies/movieSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;