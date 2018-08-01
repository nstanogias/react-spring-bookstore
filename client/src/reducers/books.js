const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        action.book
      ];
    case 'REMOVE_BOOK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_BOOK':
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            ...action.updates
          };
        } else {
          return book;
        }
      });
    case 'GET_BOOKS':
      return action.books;
    default:
      return state;
  }
};