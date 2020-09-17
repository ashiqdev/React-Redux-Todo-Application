import React from 'react';
import { Provider } from 'react-redux';
import todoreducer from './reducer/todoReducer';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, todoreducer);

// const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    todos: todoreducer,
  },
});

const persistor = persistStore(store);

// wrapper
const StateProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      {children}
      {/* </PersistGate> */}
    </Provider>
  );
};

export { store, StateProvider };
