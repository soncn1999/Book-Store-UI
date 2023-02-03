import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './bookDetail.scss';
import { getBookById } from '../../../services/bookService';

class bookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailBookResult: null,
        }
    }

    componentDidMount() {
        if (this.props.match.params && this.props.match.params.bookId) {
            let detailBookResult = getBookById(this.props.match.params.bookId);
            if (detailBookResult) {
                this.setState({ detailBookResult: detailBookResult.data });
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        const { detailBookResult } = this.state;

        return (
            <div className="content__right">
                <div className="book-detail">
                    <div className="book-detail-info">
                        <div className="book-detail-info__cover"></div>
                        <div className="book-detail-info__desc">
                            <div className="book-detail-info__desc-name">{detailBookResult && detailBookResult.name}</div>
                            <div className="book-detail-info__desc-author">Tác giả: {detailBookResult && detailBookResult.author}</div>
                            <div className="book-detail-info__desc-publisher">Nhà xuất bản: {detailBookResult && detailBookResult.source}</div>
                        </div>
                    </div>

                    <div className="book-detail-content">
                        {detailBookResult && detailBookResult.desc}
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(bookDetail);


