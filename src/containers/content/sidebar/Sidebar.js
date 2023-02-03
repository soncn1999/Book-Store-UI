import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import './Sidebar.scss';
import { getAllCategory } from '../../../services/bookService'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryList: '',
        }
    }

    componentDidMount() {
        const allCategoryList = getAllCategory();
        console.log(allCategoryList);
        if (allCategoryList) {
            this.setState({
                categoryList: allCategoryList.data
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {

    }

    handleGetListBook = (category) => {
        if (category.id) {
            if (this.props.history) {
                this.props.history.push(`/get-category/${category.id}`);
            }
        }
    }

    render() {
        const { categoryList } = this.state;
        return (
            <div className="content__left">
                <div className="content__left-category">
                    <div className="content__left-category-title">
                        Danh mục
                    </div>
                    <div className="cross-line cross-line--sidebar-spacing"></div>
                </div>
                <ul className="content__left-list">
                    {
                        categoryList && categoryList.length > 0 && categoryList.map((category) => {
                            return <li className="content__left-item" key={category.id} onClick={() => this.handleGetListBook(category)}>{category.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default withRouter(Sidebar);


