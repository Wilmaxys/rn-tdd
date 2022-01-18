import { defaultTheme } from '../../constants';
import { ACTIONS } from '../actions';

const defaultState = {
  theme: defaultTheme,
};

export default persisted = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return { ...state, theme: action.value };

    default:
      return state;
  }
};
