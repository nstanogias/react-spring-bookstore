import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BookList = (props) => (
    <div>
      <h3>Book List:</h3>
        <ul>
            {props.books.map(book => {
                return (
                    <li key={book.id}>
                        <Book {...book} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        books: state
    };
};

export default connect(mapStateToProps)(BookList);