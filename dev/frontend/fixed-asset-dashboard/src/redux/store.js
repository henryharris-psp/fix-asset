import { createStore, combineReducers } from 'redux';
import assetReducer from './reducers/AssetReducer';

const rootReducer = combineReducers({
  asset: assetReducer,
});

const store = createStore(rootReducer);

export default store;
