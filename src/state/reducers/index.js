import { combineReducers } from 'redux';

// when combining multiple pieces of state, reducers must be combined like here:

// export default combineReducers({
//   user: userReducer,
// });

export default () => ({
  user: 'user',
});
