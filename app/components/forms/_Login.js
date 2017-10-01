import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row } from 'react-bootstrap'
import { Link } from 'react-router';
import LoginComp from './LoginComp'
import { Login_Url } from '../../actions/types'
import RegistrationForm from './RegistrationForm'

class Login extends Component {
    constructor(props) {
        super(props);

    }

    handleSubmit(val) {
        const { apiFetch} = this.props;
        var t = {
            "username": "prakash2",
            "pwd": "prakash2"

        }

        var _url = Login_Url;
        this.props.apiFetch(_url, t, 'POST');
    }


    render() {
        const { error, pristine, reset, submitting, onSubmit, apiFetch} = this.props
        return (
            <div className="formContainer">
                            <RegistrationForm onSubmit={this.handleSubmit.bind(this)} />


                LOGIN::    </div >
        );
    }
}
LoginComp.propTypes = {
    apiFetch: PropTypes.func
}
export default Login