import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { setLocalStorage } from "@utils/localStorage";
import rootReducer from "./reducers";
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
// subscription to any changes in store to set data to localstorage
store.subscribe(() => {
    setLocalStorage('theme', store.getState().themeReducer);
});

export default store;