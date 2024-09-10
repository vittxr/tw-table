import {
  OnChangeFn,
  RowSelectionState,
  SortingState,
} from '@tanstack/react-table';

export type Sort = {
  state: SortingState;
  setState: OnChangeFn<SortingState>;
};

export type SearchState = {
  q: string;
  page: number;
  cols: string;
  order_by: string;
  order: string;
};

export type Search = {
  state: SearchState;
  setState: OnChangeFn<string>;
};

export type Selection = {
  type: 'single' | 'multiple';
  state: RowSelectionState;
  setState: OnChangeFn<RowSelectionState>;
};

export type ResponsivenessType = 'card' | 'scroll' | null;
