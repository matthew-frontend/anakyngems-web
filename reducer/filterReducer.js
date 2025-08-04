export const initialState = {
  price: "All",

  availability: "All",

  color: [],
  materials: [],
  size: "All",

  categories: [],
  filtered: [],
  sortingOption: "Sort by (Default)",
  sorted: [],
  currentPage: 1,
  itemPerPage: 9,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_PRICE":
      return { ...state, price: action.payload };

    case "SET_COLOR":
      return { ...state, color: action.payload };
    case "SET_SIZE":
      return { ...state, size: action.payload };
    case "SET_AVAILABILITY":
      return { ...state, availability: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_MATERIAL":
      return { ...state, materials: action.payload };
    case "SET_FILTERED":
      return { ...state, filtered: action.payload };
    case "SET_SORTING_OPTION":
      return { ...state, sortingOption: action.payload };
    case "SET_SORTED":
      return { ...state, sorted: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "TOGGLE_FILTER_ON_SALE":
      return { ...state, activeFilterOnSale: !state.activeFilterOnSale };
    case "SET_ITEM_PER_PAGE":
      return { ...state, itemPerPage: action.payload };
    case "CLEAR_FILTER":
      return {
        ...state,
        price: "All",

        availability: "All",

        color: [],
        size: "All",
        material: [],
        categories: [],
      };
    default:
      return state;
  }
}
