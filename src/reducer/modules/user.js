import { basePost } from '@/reducer/axios/base';

// Actions
const LOGIN = 'LOGIN';

// Reducer user
const initialState = {
  isLogin: false,
  uid: null,
  userName: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      // do something
      return state;
    }
    default:
      return state;
  }
};

// Action Creators
export function loginActions(data) {
  return {
    type: LOGIN,
    payload: basePost('/login', data)
  };
}
