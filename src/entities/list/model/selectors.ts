import { createDraftSafeSelector, Selector } from '@reduxjs/toolkit';

import { RootState } from '@/shared/types/redux';

import { ListItems, ListSliceState } from './types';

export const selectListItems = (state: RootState): ListSliceState => state.list;

export const listSelector: Selector<RootState, ListItems> = createDraftSafeSelector(
  selectListItems,
  list => list.items
);
