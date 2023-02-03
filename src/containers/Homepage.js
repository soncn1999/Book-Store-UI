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
                })
            } else if (this.props.match.params.bookId) {
                this.setState({
                    showList: false,
                })
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillReceiveProps(nextProps) {
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


