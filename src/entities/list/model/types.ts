export type ListItems = [{ userId: number; id: number; title: string; body: string }] | [];

export interface ListSliceState {
  items: ListItems;
}

export type Test = { data: { [key: string]: string } };
