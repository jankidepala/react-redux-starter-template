import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row, Table, DatePicker } from 'react-bootstrap'
import { renderField, renderFieldcCt, renderMultiselect, renderSelectList, dropDown, renderDropdownList, renderDropzoneInput } from './FormComponents'
import NavritiPastSubmission from './NavritiPastSubmission'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.accentureEmail) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.empName) { errors.empName = 'Required' }
  if (!values.userId) { errors.userId = 'Required' } else if (values.userId.length < 6) { errors.userId = 'Incorrect Id' } else { }
  if (!values.esiId) { errors.esiId = 'Required' }
  if (!values.mobile) { errors.mobile = 'Required' }
  if (!values.accentureEmail) { errors.accentureEmail = 'Required' }
  if (values.pwd != values.cpwd) { errors.pwd = 'Password not matching' }


  if (!values.userId) { errors.age = 'Required' }
  else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const handleSubmit = (val) => {
  var t = { "sapId": "123", "empName": "Janki", "username": "Jan2", "pwd": "janki", "empId": 0, "errorMsg": null }
  var _url = RegForm_Url;
  this.props.apiFetch(_url, val, 'POST', 'registration');

}
let Navitri = (props) => {
  /*
"ideaId": 1,
  *"sapId":879,
   "savings": 0,
  "elapsedTime": 0,- FOR SME
  "ideaStage": "Ideation Stage",
  "stageOutCome": null,
  "portfolio": "Automation",
  "applicationName": "Automation App",
  "submittedBy": "Avinash",
  "ideaClassification": null,
  "problemStatement": "Manual work",
  "solutionDescription": "Automation of work",
  "perHourDollarRate": 0,
  * "annualEffortSavings": 0,
  "client": "Internal",
  "comments": "Automation to be done",
  "technology": "Java"
                            */

  const { error, pristine, reset, submitting} = props
  return (
    <div className="formContainer">
      <NavritiPastSubmission DsrData={props.DsrData}/>
      <h3>Submission Form</h3>
      <form onSubmit={handleSubmit}>
        <Row className="show-grid">
          <Field name="submittedBy" component={renderField} type="text" label="Idea Proponent Name*" />
          <Field name="personalEmail" component={renderField} type="email" label="Category*" />
          <Field name="portfolio" component={renderField} type="text" label="Portfolio*" />
          <Field name="applicationName" component={renderField} type="email" label="Application Name*" />
          <Field name="ideaClassification" component={renderField} type="email" label="idea Classification*" />
          <Field name="problemStatement" component={renderFieldcCt} type="text" label="Problem Statement*" />
          <Field name="solutionDescription" component={renderFieldcCt} type="text" label="Proposed Solution*" />
          <Field name="comments" component={renderFieldcCt} type="text" label="comments" />
        </Row>
        <Row className="show-grid break">
          <Col>
            <Field name="annualEffortSavings" component={renderField} type="text" label="Annual Effort Savings" />
            <Field name="perHourDollarRate" component={renderField} type="text" label="Per Hour Dollar rate" />
            <Field name="savings" component={renderField} type="text" label="Savings(Hours)" />
          </Col>
        </Row>
        <Row className="show-grid break">
          <div>
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine || submitting} className="btn btn-primary" onClick={reset}>Reset Values
        </button>
          </div>
        </Row>
      </form>
    </div >
  )
}


Navitri = reduxForm({
  form: 'initializeFromState',
  //  validate,
  //warn
})(Navitri)

export default Navitri