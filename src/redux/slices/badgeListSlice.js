import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  badgeList: false,
};

export const badgeListSlice = createSlice({
  name: 'badgeList',
  initialState,
  reducers: {
    showBadgeList: (state) => {
      state.badgeList = true;
    },
    hideBadgeList: (state) => {
      state.badgeList = false;
    },
  },
});

export const { showBadgeList, hideBadgeList } = badgeListSlice.actions;

export default badgeListSlice.reducer;