import { FilterAction, FilterState, SortTypes } from '../../../types/filter';

const initialState: FilterState = {
  sort: SortTypes.All,
  query: '',
};

export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case 'filter/SET_SORT':
      return {
        ...state,
        sort: action.payload,
      };

    case 'filter/SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};
