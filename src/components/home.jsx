import React from 'react';

import { withRouter } from "react-router";

import { connect } from "react-redux";

class Home extends React.Component {
    render() {
        const { profil } = this.props;
        return (
            <p>
                Hello {profil.pseudo} !
            </p>
        );
    }
}

const mapStateToProps = state => {
    return {
        profil: state.profil
    };
}

export default withRouter(connect(
    mapStateToProps
)(Home));
