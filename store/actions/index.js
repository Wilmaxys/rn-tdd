const createAction = (type, value) => ({ type, value });

const ACTIONS = {
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_THEME: 'SET_THEME',
};

export { createAction, ACTIONS };
