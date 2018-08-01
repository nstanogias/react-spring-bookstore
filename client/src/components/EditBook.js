import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { editBook } from '../actions/books';

const EditBook = () => (
    <div className='container__box'>
        <BookForm
            book={this.props.book}
            onSubmitBook={(book) => {
                editBook(this.props.book.id, book);
                this.props.history.push('/');
            }}
        />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        book: state.find((book) =>
            book.id === props.match.params.id)
    };
};

const mapDispatchToProps = dispatch => {
  return {
    editBook: (id, book) => dispatch(editBook(id, book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);