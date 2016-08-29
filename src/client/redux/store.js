import rootReducer from './reducer';
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"
import routes from '../routes';
import {reduxReactRouter} from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';

export default function configureStore() {
    let createStoreWithMiddleware;

    const logger = createLogger();

    const middleware = applyMiddleware(promise(),thunk, logger);
    createStoreWithMiddleware = compose(
     middleware,
     reduxReactRouter({routes, createHistory})
    );

    const store = createStoreWithMiddleware(createStore)(rootReducer);

    if (module.hot) {
        module.hot
            .accept('./reducer.js', () => {
                const nextRootReducer = require('./reducer.js');
                store.replaceReducer(nextRootReducer);
            });
    }

    return store;

}