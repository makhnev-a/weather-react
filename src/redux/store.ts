import {combineReducers, createStore, applyMiddleware} from 'redux';
import {citiesReducer} from './reducers/citiesReducer';
import { citiesListReducer } from './reducers/citiesList/citiesList.reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cities: citiesReducer,
    townsList: citiesListReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;