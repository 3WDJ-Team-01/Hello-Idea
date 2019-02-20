import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { auth, authEpics } from './auth';

export const rootReducers = combineReducers({
  auth,
});

export const rootEpics = combineEpics(
  authEpics.checkUserEpic,
  authEpics.registerEpic,
  authEpics.loginEpic,
  authEpics.logoutEpic,
);
