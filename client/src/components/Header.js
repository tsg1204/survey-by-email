import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';
            case false:
                return 'Im loggedout';
            default:
                return 'im logged in';
        }

    }

    render () {
        //console.log('From header:', this.props)
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Survey By Email
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);