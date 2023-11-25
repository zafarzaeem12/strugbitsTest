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

// Import the appropriate storage module
import storage from 'redux-persist/lib/storage/session'; // Use 'session' for sessionStorage

// Import your reducers
import { UserReducers } from '../reducers/UserReducer';

// Combine your reducers
const Rootreducers = combineReducers({
  users: UserReducers,
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  version: 1,
  storage, // Use 'storage' instead of AsyncStorage
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
