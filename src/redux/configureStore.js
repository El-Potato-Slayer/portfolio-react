import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk';
import { fetchData } from './actions';
import { fetchProjectsFailure, fetchProjectsRequest, fetchProjectsSuccess } from './actions/projectActions';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
store.dispatch(fetchData(fetchProjectsRequest, fetchProjectsSuccess, fetchProjectsFailure))

export default store