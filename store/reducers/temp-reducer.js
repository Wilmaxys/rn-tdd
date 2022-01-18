import { ACTIONS } from '../actions';

const defaultState = {
  is_loading: false,
};

export default temp = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_LOADING:
      return { ...state, is_loading: action.value };

    default:
      return state;
  }
};
