import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from 'vitest';
import { AuthorizationStatus, NameSpace, APIStatus } from '../../../shared/enum';
import { checkAuthAction, logoutAction, loginAction } from '../api/thunk';
import { TUser } from '../../../shared/types/user';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  loginStatus: APIStatus;
  userData: Nullable<TUser>;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  loginStatus: APIStatus.Idle,
  userData: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.loginStatus = APIStatus.Loading;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.loginStatus = APIStatus.Succeeded;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginStatus = APIStatus.Failed;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  },
});

export const userActions = { checkAuthAction, loginAction, logoutAction };
