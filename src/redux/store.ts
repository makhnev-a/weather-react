import {combineReducers, createStore, applyMiddleware} from 'redux';
import {citiesReducer} from './reducers/cities/citiesReducer';
import { citiesListReducer } from './reducers/citiesList/citiesList.reducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cities']
};

const rootReducer = combineReducers({
    cities: citiesReducer,
    townsList: citiesListReducer
});

const persistRootReduser = persistReducer(persistConfig, rootReducer);

export type AppStateType = ReturnType<typeof persistRootReduser>;

export const store = createStore(persistRootReduser, applyMiddleware(thunk));
export const persistor = persistStore(store);