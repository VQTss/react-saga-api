import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";

import { getUsers , addUsers, deleteUsers , updateUsers , loginUsers} from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middleware =
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
        ? compose(applyMiddleware(sagaMiddleware), reduxDevTools)
        : applyMiddleware(sagaMiddleware);


export const store = createStore(rootReducer, middleware);


sagaMiddleware.run(getUsers);
sagaMiddleware.run(addUsers);
sagaMiddleware.run(deleteUsers);
sagaMiddleware.run(updateUsers);
sagaMiddleware.run(loginUsers);