import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  whitelist: ["persisted"],
  storage: ExpoFileSystemStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
