import axios from 'axios';

const _addBook = (book) => ({
  type: 'ADD_BOOK',
  book
});

export const addBook = (bookData = {
  title: '',
  description: '',
  author: '',
  published: 0
}) => {
  return (dispatch) => {
    const book = {
      title: bookData.title,
      description: bookData.description,
      author: bookData.author,
      published: bookData.published
    };

    return axios.post('api/books/create', book).then(result => {
      dispatch(_addBook(result.data));
    });
  };
};

const _removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id
});

export const removeBook = ({ id } = {}) => {
  return (dispatch) => {
    return axios.delete(`api/books/${id}`).then(() => {
      dispatch(_removeBook({ id }));
    })
  }
};

const _editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates
});

export const editBook = (id, updates) => {
  return (dispatch) => {
    return axios.put(`api/books/${id}`, updates).then(() => {
      dispatch(_editBook(id, updates));
    });
  }
};

const _getBooks = (books) => ({
  type: 'GET_BOOKS',
  books
});

export const getBooks = () => {
  return (dispatch) => {
    return axios.get('api/books').then(result => {
      const books = [];

      result.data.forEach(item => {
        books.push(item);
      });

      dispatch(_getBooks(books));
    });
  };
};