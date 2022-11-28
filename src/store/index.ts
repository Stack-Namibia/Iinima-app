import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default createStore(reducers, applyMiddleware(thunk));
