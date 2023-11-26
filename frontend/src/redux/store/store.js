// Import necessary Redux and redux-persist modules
import { createStore } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


import storage from 'redux-persist/lib/storage/session';

import { UserReducers } from '../reducers/UserReducer';


const Rootreducers = combineReducers({
  users: UserReducers,
});


const persistConfig = {
  key: 'root',
  version: 1,
  storage, 
};

const persistedReducer = persistReducer(persistConfig, Rootreducers);

// Configure your Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
