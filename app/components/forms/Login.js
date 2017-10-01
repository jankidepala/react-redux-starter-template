import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, Grid, ControlLabel, Radio, Row } from 'react-bootstrap'
import { Link } from 'react-router';
import LoginComp from './LoginComp'
import { Login_Url } from '../../actions/types'

class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(val) {
        const { apiFetch} = this.props;
        var t = {
            "username": "testuser",
            "pwd": "testuser"
        }
        var _url = Login_Url;
        this.props.apiFetch(_url, val, 'POST', 'login');
    }


    render() {
        const { error, pristine, reset, submitting, onSubmit, apiFetch, UserLogin} = this.props
        return (
            <div className="formContainer Login">
                <h3 className="headingH12">Welcome</h3>
                <Row className="show-grid">
                    <Col sm={6} md={7}>
                        <img src="../../../media/homePage.jpg" />
                    </Col>
                    <Col sm={6} md={5}>
                        <LoginComp onSubmit={this.handleSubmit.bind(this)} />
                        {this.props.UserLogin.errorMsg &&
                            <div className="err">{this.props.UserLogin.errorMsg}</div>
                        }
                    </Col>
                </Row>
            </div >
        );
    }
}
LoginComp.propTypes = {
    apiFetch: PropTypes.func,
    UserLogin: PropTypes.array
}
export default Login