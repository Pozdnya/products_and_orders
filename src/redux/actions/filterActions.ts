import { QueryAction, SortAction, SortTypes } from '../../types/filter';

const setSort = (type: SortTypes): SortAction => ({
  type: 'filter/SET_SORT',
  payload: type,
});

const setQuery = (query: string): QueryAction => ({
  type: 'filter/SET_QUERY',
  payload: query,
});

export const actions = {
  setSort,
  setQuery,
};
