import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import repositoriReducer from "./repositoriReducer";
import repoReducer from "./repoReducer";
import favouritesInfoReducer from "./reduxFavourites";

const reducers = combineReducers({
   repositori: repositoriReducer,
   repo: repoReducer,
   favouriteInfo: favouritesInfoReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;

// composeWithDevTools() - для подключения Redux Dev tools утилиты