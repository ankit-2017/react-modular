import { combineReducers } from '@reduxjs/toolkit';
import HomeReducer from 'components/Home/Home.slice';

export default combineReducers({
  home: HomeReducer,
});
