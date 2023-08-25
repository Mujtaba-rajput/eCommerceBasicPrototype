import {createSlice} from '@reduxjs/toolkit';
// import {usersData} from '../../utils/mock';
import {UserType} from './types';

export interface IState {
  users: Array<UserType>;
}

const initialState: IState = {
  users: [],
};

const homeSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setUsers: (state: IState, {payload}) => {
      state.users = [...state.users, payload];
    },
  },
});

export const {setUsers} = homeSlice.actions;
export const homeReducer = homeSlice.reducer;
