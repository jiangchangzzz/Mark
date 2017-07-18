import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import fetchMiddleware from '../middlewares/fetchMiddleware';
import rootReducer from '../reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore=(initialState=undefined)=>{
    const store=createStore(rootReducer,initialState,
        composeEnhancers(
            applyMiddleware(thunk,fetchMiddleware)
        )
    );
    return store;
};

export default configureStore;