import { createSlice } from '@reduxjs/toolkit';

import { ListItems, ListSliceState } from './types';

const initialState: ListSliceState = {
  items: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    getList() {},
    setList(state, { payload }) {
      state.items = Object.values(payload) as ListItems;
    },
  },
});

export const {
  actions,
  actions: { getList, setList },
} = listSlice;

export default listSlice.reducer;
