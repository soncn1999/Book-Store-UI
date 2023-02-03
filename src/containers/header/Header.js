import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        return (
            <div className="header">
                <div className="header-content-left">
                    <div className="header-content-left__logo"></div>
                    <div className="header-content-left__brand">
                        <a href="/">BookStore</a>
                    </div>
                </div>
                <div className="header-conten-right">
                    <div className="header-content-right__avatar">
                        <div className="header-content-right__avatar-img"></div>
                        <div className="header-content-right__avatar-username">
                            StudentName
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;


