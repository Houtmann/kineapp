import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  HOME_GET_INITIAL_DATA_BEGIN,
  HOME_GET_INITIAL_DATA_SUCCESS,
  HOME_GET_INITIAL_DATA_FAILURE,
  HOME_GET_INITIAL_DATA_DISMISS_ERROR,
} from '../../../../src/features/home/redux/constants';

import {
  getInitialData,
  dismissGetInitialDataError,
  reducer,
} from '../../../../src/features/home/redux/getInitialData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('home/redux/getInitialData', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when getInitialData succeeds', () => {
    const store = mockStore({});

    return store.dispatch(getInitialData())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_INITIAL_DATA_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_INITIAL_DATA_SUCCESS);
      });
  });

  it('dispatches failure action when getInitialData fails', () => {
    const store = mockStore({});

    return store.dispatch(getInitialData({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', HOME_GET_INITIAL_DATA_BEGIN);
        expect(actions[1]).toHaveProperty('type', HOME_GET_INITIAL_DATA_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissGetInitialDataError', () => {
    const expectedAction = {
      type: HOME_GET_INITIAL_DATA_DISMISS_ERROR,
    };
    expect(dismissGetInitialDataError()).toEqual(expectedAction);
  });

  it('handles action type HOME_GET_INITIAL_DATA_BEGIN correctly', () => {
    const prevState = { getInitialDataPending: false };
    const state = reducer(
      prevState,
      { type: HOME_GET_INITIAL_DATA_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getInitialDataPending).toBe(true);
  });

  it('handles action type HOME_GET_INITIAL_DATA_SUCCESS correctly', () => {
    const prevState = { getInitialDataPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_INITIAL_DATA_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getInitialDataPending).toBe(false);
  });

  it('handles action type HOME_GET_INITIAL_DATA_FAILURE correctly', () => {
    const prevState = { getInitialDataPending: true };
    const state = reducer(
      prevState,
      { type: HOME_GET_INITIAL_DATA_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getInitialDataPending).toBe(false);
    expect(state.getInitialDataError).toEqual(expect.anything());
  });

  it('handles action type HOME_GET_INITIAL_DATA_DISMISS_ERROR correctly', () => {
    const prevState = { getInitialDataError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: HOME_GET_INITIAL_DATA_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.getInitialDataError).toBe(null);
  });
});

