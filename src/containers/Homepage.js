import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header/Header';
import SideBar from './content/sidebar/Sidebar';
import BookList from './content/book-list/Booklist';
import BookDetail from './content/book-detail/bookDetail';

import './Homepage.scss';


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: true,
        }
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params) {
            if (this.props.match.params.categoryId) {
                this.setState({
                    showList: true,
                    categoryId: this.props.match.params.categoryId
                })
            } else if (this.props.match.params.id) {
                this.setState({
                    showList: false,
                    bookId: this.props.match.params.bookId,
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillReceiveProps(nextProps) {
        console.log("book id: " + nextProps.match.params.bookId);
        console.log("category id: " + nextProps.match.params.categoryId);
        if (this.props.match && this.props.match.params) {

            if (nextProps.match.params.bookId) {
                this.setState({
                    showList: false,
                })
            } else if (nextProps.match.params.categoryId) {
                console.log('start');
                this.setState({
                    showList: true,
                })
            }
        }
    }

    render() {
        const { showList } = this.state;
        console.log('show List: ' + showList);
        return (
            <Fragment>
                <Header />
                <div className="content">
                    <SideBar />
                    {
                        showList ? <BookList /> : <BookDetail />
                    }
                </div>
            </Fragment>
        )
    }

}

export default Homepage;


