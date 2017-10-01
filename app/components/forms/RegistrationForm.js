import React, { Component, PropTypes } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'
import axios from 'axios';
import { Registration_Url, FetchPortfolio_Url } from '../../actions/types'
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-connect'

const colors = [{ color: 'Red', value: 'ff0000' },
{ color: 'Green', value: '00ff00' },
{ color: 'Blue', value: '0000ff' }]

const renderDropdownList = ({ input, ...rest }) =>
  <DropdownList {...input} {...rest} />


const dropDown = ({ input, label, type, meta: { touched, error, warning }, ...rest  }) => (
  <span>
    <label>{label}</label>
    <div>
      <DropdownList {...input} {...rest} />
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </span>
)

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <span>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </span>
)
const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'username Required'
  } else if (values.username.length > 8) {
    errors.username = 'Must be 8 characters or less'
  }
  if (!values.accentureEmail) {
    errors.email = 'Accenture Email Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.sapId) { errors.sapId = 'Enter SAP ID' }
  if (!values.empName) { errors.empName = 'Employees without a name can not register. Get out of here' }
  if (!values.username) { errors.username = 'Pick a username' } else if (values.username.length < 5) { errors.username = 'username should be atleast 5 character' } else { }
  if (!values.mobile) { errors.mobile = 'Required' }
  if (!values.accentureEmail) { errors.accentureEmail = 'Required' }
  if (values.pwd != values.cpwd) { errors.pwd = 'Password not matching' }


  return errors
}


const warn = values => {
  const warnings = {}
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}
const element = values => {
  <option value="ff0000">PP</option>
}
const renderDropDown = ({ input, t, label, type, value, meta: { touched, error, warning } }) => (
  <option value={t}>{label}</option>
)



class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { dropDownId: 1 };
  }
  componentDidMount() {
    const { apiFetch} = this.props;
    var _url = FetchPortfolio_Url + '/' + "2";
    this.props.apiFetch(_url, "", 'GET', 'RegForm');

  }

  renderUserMessage = (e, s) => {
    var fir = [{ "id": 1, "appDesc": "MSC" }, { "id": 2, "appDesc": "MED" }, { "id": 3, "appDesc": "Speciality - Pega" }, { "id": 4, "appDesc": "SAM Pega" }, { "id": 5, "appDesc": "Home Delivery" }, { "id": 6, "appDesc": "PLB" }, { "id": 7, "appDesc": "Application Security" }, { "id": 8, "appDesc": "Midrange" }, { "id": 9, "appDesc": "Claims OASIS" }, { "id": 10, "appDesc": "Mobile POC" }, { "id": 11, "appDesc": "Pega Clinical Services" }, { "id": 12, "appDesc": "ACN PMO " }]
    var sec = [{ "id": 13, "appDesc": "B2C -PSO" }, { "id": 14, "appDesc": "CDH - PSO" }, { "id": 15, "appDesc": "CRD - PSO" }, { "id": 16, "appDesc": "eSD  - PSO" }, { "id": 17, "appDesc": "Corp Systems" }, { "id": 18, "appDesc": "MBM" }, { "id": 19, "appDesc": "Admin" }, { "id": 20, "appDesc": "ATK" }]
    var thi = [{ "id": 21, "appDesc": "Retail Network - Phoenix" }];
    var fou = [{ "id": 22, "appDesc": "CBT AO" }, { "id": 23, "appDesc": "WIMS" }];

    var rows = []
    switch (e.favoriteColorValue) {
      case "1":
        fir.forEach(function (element) {
          rows.push(<option value={element.id}>{element.appDesc}</option>);
        });
        return rows;
        break;
      case "2":
        sec.forEach(function (element) {
          rows.push(<option value={element.id}>{element.appDesc}</option>);
        });
        return rows;
        break;
      case "3":
        thi.forEach(function (element) {
          rows.push(<option value={element.id}>{element.appDesc}</option>);
        });
        return rows;
        break;
      case "4":
        fou.forEach(function (element) {
          rows.push(<option value={element.id}>{element.appDesc}</option>);
        });
        return rows;
        break;
      default:
        1


    }
  }

  render() {
    const { eror, handleSubmit, pristine, reset, submitting, UserLogin, favoriteColorValue} = this.props
    let products = [{ "id": 1, "portfolioDesc": "Development", "portfolioMgr": "Ashwani Koul" }, { "id": 2, "portfolioDesc": "IT-PSO", "portfolioMgr": "Gautam Ramesh" }]
    let rows = []; const lunch = this.props.lunch
    var names = ['Jake', 'Jon', 'Thruster'];
    let portfolio = [{ "id": 1, "portfolioDesc": "Development", "portfolioMgr": "Ashwani Koul" }, { "id": 2, "portfolioDesc": "IT-PSO", "portfolioMgr": "Gautam Ramesh" }, { "id": 3, "portfolioDesc": "Phoenix", "portfolioMgr": "Kannan Pothiraj" }, { "id": 4, "portfolioDesc": "Oracle", "portfolioMgr": "Devjyoti Sengupta" }]
    var secondDropDown = [{ id: "1", Name: 'SecondD' }, { id: "2", Name: 'Green' }, { id: "3", Name: 'Blue' }];

    return (
      <div className="formContainer">
        <h3>Registration Form </h3>
        <form onSubmit={handleSubmit}>
          <Row className="show-grid">
            <Field name="empName" component={renderField} type="text" label="Employee Name*" />
            <Field name="sapId" type="number" component={renderField} label="SAP Id*" />
            <Field name="accentureEmail" component={renderField} type="email" label="Accenture Email*" />
            <Field name="personalEmail" component={renderField} type="email" label="Personal Email*" />
            <Field name="mobile" component={renderField} type="text" label="Mobile*" />
          </Row>
          <Row className="show-grid">
            <label>Project Name</label>
            <Field name="favoriteColor" component="select" type="text" label="Employee Name*" >
              {portfolio.map((name, i) =>
                <Field t={name.id} component={renderDropDown} type="text" label={name.portfolioDesc} />
              )}
            </Field>
            {favoriteColorValue &&
              <Field name="appId" component="select" type="text" label="Employee Name*" >
                {this.renderUserMessage({ favoriteColorValue })}
              </Field>
            }
          </Row>
          <Row className="show-grid break">
            <Field name="hobby" component={renderField} type="text" label="Hobbies" />
            <Field name="dateOfbirth" component={renderField} type="text" label="Date Of Birth" />
          </Row>

          <Row className="show-grid break">
            <Field name="technologys" component={renderMultiselect} data={['Java', 'Pega', 'Front End/UI', 'Dev Ops']} type="text" label="My technology" />
          </Row>
          <Row className="show-grid break">
            <label>aboutMe</label>
            <Field
              name="aboutMe"
              component="input"
              type="text"
              placeholder="Say something about yourself!"
              label="About Me"
              />
          </Row>
          <Row className="show-grid break">

            <Field name="username" type="text" component={renderField} label="Choose a username" />
            <Field name="pwd" type="password" component={renderField} label="Password" />
            <Field name="cpwd" type="password" component={renderField} label="Confirm Password" />
          </Row>
          <Row className="show-grid break">
            {this.props.UserLogin.errorMsg &&
              <div className="err">{this.props.UserLogin.errorMsg}</div>
            }
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
}
const renderDropzoneInput = (field, {label}) => {
  const files = field.input.value;
  return (
    <span>
      <label>{label}</label>
      <div className="dropZoneLoader">
        <Dropzone name='imgSrc'
          onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}>
          <div><span>Dropping file here, or click to BROWSE files to upload </span>
            <Button bsStyle="info">BROWSE</Button>
          </div>
        </Dropzone>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            {files.map((file, i) => <li key={i}>{file.name}</li>)}
          </ul>
        )}
      </div>
    </span>
  );
}
const renderSelectList = ({label, input, ...rest }) =>
  <span>
    <label>{label}</label>
    <SelectList {...input} onBlur={() => input.onBlur()} {...rest} />
  </span>

const renderMultiselect = ({input, label, ...rest }) =>
  <span className="wid">
    <label>{label}</label>
    <Multiselect {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      {...rest} />
  </span>
RegistrationForm.propTypes = {
  UserLogin: PropTypes.object
}
RegistrationForm = reduxForm({
  form: 'initializeFromState',
  validate,
  warn
})(RegistrationForm)

const selector = formValueSelector('initializeFromState') // <-- same as form name
RegistrationForm = connect(
  state => {
    const favoriteColorValue = selector(state, 'favoriteColor')
    return {
      favoriteColorValue
    }
  }
)(RegistrationForm)
export default RegistrationForm