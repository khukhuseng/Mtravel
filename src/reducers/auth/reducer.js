/* @flow */

import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, GETPROFILE_SUCCESS } from "./actions";

const defaultState = {
  id: null,
  email: null,
  name: null,
  username: null,
  token: null,
  phone: null,
  gender: null,
  dob: null,
  country: null
};

const authReducer = (state: any = defaultState, action: any) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...{
          id: action.id,
          email: action.email,
          name: action.name,
          username: action.username,
          token: action.token
        }
      };
    case GETPROFILE_SUCCESS:
      return {
        ...state,
        ...{
          id: action.id,
          email: action.email,
          name: action.name,
          username: action.username,
          token: action.token,
          phone: action.phone,
          gender: action.gender,
          dob: action.dob,
          country: action.country
        }
      };
    case LOGOUT:
      return { ...state, ...defaultState };
    default:
      return state;
  }
};

export default authReducer;
