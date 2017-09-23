import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

export default function configureStore(initialState) {
    // const reduxImmutableStateInvariantMiddleware = reduxImmutableStateInvariant();
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [sagaMiddleware];

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}