// import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS } from './actions';

import { createSlice } from '@reduxjs/toolkit';
import { fetchUsersAsync } from './actions';

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

// Vanila Redux
// export const UsersReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//       return { ...state, loading: true };
//     case FETCH_USERS_SUCCESS:
//       return { ...state, loading: false, userData: action.payload };
//     case FETCH_USERS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// Toolkit -----------------------------------------------------------

export const UsersSlice = createSlice({
  name: 'Users',
  initialState,
  extraReducers: {
    [fetchUsersAsync.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchUsersAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    [fetchUsersAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
