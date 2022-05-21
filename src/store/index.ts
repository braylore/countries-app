import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApi';
import optionsReducer from './reducers/optionsSlice';
import paginationReducer from './reducers/paginationSlice';

const rootReducer = combineReducers({
  [countriesApi.reducerPath]: countriesApi.reducer,
  optionsReducer,
  paginationReducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [countriesApi.reducerPath]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(countriesApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
