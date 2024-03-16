import {thunk} from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import  reducer from '../Reducers/reducer' 



const composeEnhancers =
   typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
      :
      compose;
      
const rootReducer = combineReducers({ reducer});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;