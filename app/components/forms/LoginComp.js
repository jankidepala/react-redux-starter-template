import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import { Link } from 'react-router';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <span>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </span>
)

let LoginComp = (props) => {

    const { error, handleSubmit, pristine, reset, submitting} = props
    return (
        <div className="formContainer">
            <h3 className="headingH13">Login</h3>
            <form onSubmit={handleSubmit}>
                <Row className="show-grid">
                    <Col xs={12} md={12}>
                        <Field name="username" component={renderField} type="text" label="User name*" val="AS" />
                        <Field name="pwd" component={renderField} type="password" label="Password*" val="AS" />
                    </Col>
                    <Col xs={12} md={12}>
                        <Link to="/Spotlight">Submit</Link>
                        <button type="button" disabled={pristine || submitting} className="btn btn-primary" onClick={reset}>Reset Values</button>
                    </Col>
                    <Col xs={12} md={12}>
                        <Link to="/RegistrationForm">First time Registration Form</Link> | <Link to="/RegistrationForm">Forgot password</Link>
                    </Col>
                </Row>
            </form>
        </div >
    )
}


LoginComp = reduxForm({
    form: 'initializeFromState',
    //  validate,
    //warn
})(LoginComp)

export default LoginComp