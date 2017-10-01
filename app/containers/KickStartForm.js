import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { myAction, selectSubreddit, login } from '../actions';
import { bindActionCreators } from 'redux'
import { selecSer, apiFetch, getWeather } from '../actions'
import { reduxForm, Field } from 'redux-form';
import axios from 'axios';
import RegistrationForm from '../components/forms/RegistrationForm'
import Header from '../components/Header';
import { RegForm_Url } from '../actions/types'

class KickStartForm extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
    }
    handleSubmit(val) {
        var t = { "sapId": "123", "empName": "Janki", "username": "Jan2", "pwd": "janki", "empId": 0, "errorMsg": null }
        var key = "cpwd";
        var favoriteColor= 'favoriteColor'
        delete val[key];
        delete val[favoriteColor];
        val.empId = 0
        val.sapId = Number(val.sapId)
        val.appId = Number(val.appId)
        var _url = RegForm_Url;
        this.props.apiFetch(_url, val, 'POST', 'registration');

    }
    render() {
        const { children, UserLogin } = this.props;
        return (
            <div>
                <RegistrationForm {...this.props} onSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

KickStartForm.propTypes = {
    UserLogin: PropTypes.object
};

export default KickStartForm
