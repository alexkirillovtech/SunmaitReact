import { OPEN_SEARCH_DROPDOWN, CLOSE_SEARCH_DROPDOWN } from '../const/searchDropdownAction'

const initialState = {
  isSearchDropdownOpen: false
};

export function searchDropdownReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_SEARCH_DROPDOWN:
      return { ...state, isSearchDropdownOpen: !state.isSearchDropdownOpen };
    case CLOSE_SEARCH_DROPDOWN:
      return { ...state, isSearchDropdownOpen: !state.isSearchDropdownOpen };
    default:
      return state;
  }
}
