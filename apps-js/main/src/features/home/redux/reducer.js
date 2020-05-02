import initialState from './initialState';
import { reducer as getInitialDataReducer } from './getInitialData';
import { reducer as registerUserReducer } from './registerUser';

const reducers = [
  getInitialDataReducer,
  registerUserReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
