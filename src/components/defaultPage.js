import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadDefaultPage } from '../actions/defaultPageActions';


class DefaultPage extends Component {

    componentWillMount() {
        this.props.loadDefaultPage()
    }

    render() {

        const postItems = this.props.defaultPageArr.map((post, index) => (

            <div key={post.id} className="row mb-3">
                <div className="col"></div>
                <p className="col-6 text-left" >
                    {post.name}
                </p>
                <div className="col-1">
                    <button className="btn btn-dark"><i className="fas fa-trash"></i></button>
                </div>
                <div className="col"></div>
            </div>

        ))

        return (
            <div className="row justify-content-center text-center">
                <h1 className="col-12 mb-5 bold">Default Page</h1>
                <div className="col-12 mb-5">
                    <button className="btn btn-primary loadBtn">
                        {this.props.defaultPageArr.length === 0 ? "Less than one item in the array" : "More than one item in the array"}
                    </button>
                </div>
                <div className="col-12">
                    {postItems}
              
                </div>
            </div>
        )
    }
}
DefaultPage.propTypes = {
    loadDefaultPage: PropTypes.func.isRequired,
    defaultPageArr: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    defaultPageArr: state.defaultPage.defaultList
})

export default connect(mapStateToProps, { loadDefaultPage })(DefaultPage);