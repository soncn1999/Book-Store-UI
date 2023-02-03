import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { getAllBook, getBookByCategoryId } from '../../../services/bookService'

import './Booklist.scss';

class Booklist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: [],
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.categoryId);
        if (this.props.match.params.categoryId) {
            if (this.props.match.params.categoryId && this.props.match.params.categoryId !== 'all') {
                let getBookResultById = getBookByCategoryId(this.props.match.params.categoryId);

                if (getBookResultById) {
                    this.setState({ bookList: getBookResultById.data });
                }
            } else if (this.props.match.params.categoryId && this.props.match.params.categoryId === 'all') {
                let getAllBookResult = getAllBook();

                if (getAllBookResult) {
                    this.setState({ bookList: getAllBookResult.data });
                }
            } else if (this.props.match.params.categoryId === undefined) {
                console.log('start');
                let getAllBookResult = getAllBook();

                if (getAllBookResult) {
                    this.setState({ bookList: getAllBookResult.data });
                }
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.match.params.categoryId);
        if (nextProps.match.params.categoryId !== 'all') {
            let getBookResultById = getBookByCategoryId(nextProps.match.params.categoryId);

            if (getBookResultById) {
                this.setState({ bookList: getBookResultById.data });
            }
        } else {
            let getAllBookResult = getAllBook();

            if (getAllBookResult) {
                this.setState({ bookList: getAllBookResult.data });
            }
        }
    }

    handleGetIdBook = (id) => {
        if (id) {
            if (this.props.history) {
                this.props.history.push(`/get-book-id/${id}`);
            }
        }
    }

    render() {

        let { bookList } = this.state;

        return (
            <div className="content__right">
                <div className="book-list">
                    {
                        bookList && bookList.length > 0 && bookList.map((book, index) => {
                            return (
                                <div className="book-item" key={book.id}>
                                    <div className="book-item__img"></div>
                                    <div className="book-item__name">{`${book.name} ${book.id}`}</div>
                                    <div className="book-item__author">Tác giả: {book.author}</div>
                                    <div className="book-item__show">
                                        <div className="btn book-item__show-btn" onClick={() => this.handleGetIdBook(book.id)}>Xem chi tiết</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }

}

export default withRouter(Booklist);


