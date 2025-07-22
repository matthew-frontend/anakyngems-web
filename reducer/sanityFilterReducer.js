export const initialState = {
  price: [0, 10000], // Price range for Sanity products
  categories: [],
  products: [], // Will be populated from Sanity
  filtered: [],
  sortingOption: "Sort by (Default)",
  sorted: [],
  currentPage: 1,
  itemPerPage: 9,
};

export function reducer(state, action) {
  switch (action.type) {
    case "SET_PRICE":
      const newState = { ...state, price: action.payload, currentPage: 1 };
      return applyFiltersAndSorting(newState);

    case "SET_CATEGORIES":
      const categoryState = { ...state, categories: action.payload, currentPage: 1 };
      return applyFiltersAndSorting(categoryState);

    case "SET_PRODUCTS":
      const productState = { 
        ...state, 
        products: action.payload, 
        filtered: action.payload,
        sorted: action.payload 
      };
      return applyFiltersAndSorting(productState);

    case "SET_SORTING_OPTION":
      const sortingState = { ...state, sortingOption: action.payload };
      return applyFiltersAndSorting(sortingState);

    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };

    case "RESET_FILTER":
      const resetState = {
        ...state,
        price: [0, 10000],
        categories: [],
        currentPage: 1,
        sortingOption: "Sort by (Default)"
      };
      return applyFiltersAndSorting(resetState);

    default:
      return state;
  }
}

function applyFiltersAndSorting(state) {
  const { products, price, categories, sortingOption } = state;
  
  // Apply filters
  let filtered = products.filter(product => {
    // Price filter
    const productPrice = product.price || 0;
    if (productPrice < price[0] || productPrice > price[1]) {
      return false;
    }

    // Category filter
    if (categories.length > 0) {
      const productCategory = product.category?.title || '';
      if (!categories.includes(productCategory)) {
        return false;
      }
    }

    return true;
  });

  // Apply sorting
  let sorted = [...filtered];
  
  switch (sortingOption) {
    case "Price, low to high":
      sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
      break;
    case "Price, high to low":
      sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
      break;
    case "Alphabetically, A-Z":
      sorted.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      break;
    case "Alphabetically, Z-A":
      sorted.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
      break;
    case "Date, old to new":
      sorted.sort((a, b) => new Date(a._createdAt) - new Date(b._createdAt));
      break;
    case "Date, new to old":
      sorted.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt));
      break;
    default:
      // Default sorting by creation date (newest first)
      sorted.sort((a, b) => new Date(b._createdAt || 0) - new Date(a._createdAt || 0));
  }

  return {
    ...state,
    filtered,
    sorted
  };
}