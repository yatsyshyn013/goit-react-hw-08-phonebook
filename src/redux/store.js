
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./contacts/filterSlice";
import { authReducer } from "./auth/authSlice";

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    filter: filtersReducer,
    auth: persistReducer(authPersistConfig, authReducer)
    
  },
   middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});


export const persistor = persistStore(store);