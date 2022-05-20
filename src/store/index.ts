import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { countriesApi } from '../api/countriesApi';
import optionsReducer from './reducers/optionsSlice';
import paginationReducer from './reducers/paginationSlice';

const rootReducer = combineReducers({
  [countriesApi.reducerPath]: countriesApi.reducer,
  optionsReducer,
  paginationReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countriesApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
