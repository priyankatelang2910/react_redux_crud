// import { createStore } from "redux";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import StudentsReducer from "./redux/reducers/StudentsReducer";


// const persistConfig = {
//     key: 'root',
//     storage,
//   }
//   const persistedReducers=persistReducer(persistConfig,StudentsReducer)
//   export const store=createStore(persistedReducers,+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default () => {
//     let store = createStore(persistedReducers)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }
// export const persistor=persistStore(store)
// export default store;
// import rootReducer from "../reducer/rootReducer";

import { legacy_createStore as createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk';
import {persistReducer , persistStore} from 'redux-persist';
import storageSession from 'redux-persist/es/storage';
import rootReducers from './redux/reducers/rootReducers';

// const middleware = [thunk];

const persistConfig = {
    key : 'persist-root',
    storage :storageSession
  }
  const persistReducers = persistReducer(persistConfig , rootReducers );
  const store = createStore(persistReducers
    // ,
    //  applyMiddleware(...middleware)
    );
 export const persistor = persistStore(store);


export default store;