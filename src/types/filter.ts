export interface FilterState {
  sort: SortTypes;
  query: string;
}

export interface SortAction {
  type: 'filter/SET_SORT';
  payload: SortTypes;
}

export interface QueryAction {
  type: 'filter/SET_QUERY';
  payload: string;
}

export type FilterAction = SortAction | QueryAction;

// eslint-disable-next-line no-shadow
export enum SortTypes {
  All = 'all',
  Monitors = 'monitors',
  Phones = 'phones',
  Cars = 'cars',
}
