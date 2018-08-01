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
                props.history.push('/');
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

export default connect(mapStateToProps, {editBook})(EditBook);