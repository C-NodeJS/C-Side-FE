import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import roomReducer from './slices/room';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
}

const rootReducer = combineReducers({
  room: roomReducer,
});

export { rootPersistConfig, rootReducer };
