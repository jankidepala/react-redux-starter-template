import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import DsrForm from './DsrForm'
import DsrPastTable from './DsrPastTable'
import { apiFetch } from '../../actions'
import { Dsr_Url, DsrPast_Url } from '../../actions/types'
import { Form, FormGroup, Panel, FormControl, Button, Col, ControlLabel, Radio, Row, Table } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Dsr extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    open: false,
    loading: true
  }
  componentWillMount(val) {
    const { apiFetch, UserLogin} = this.props;
    let empId = this.props.UserLogin.empId;
    var _url = DsrPast_Url + `/${empId}`;
    this.props.apiFetch(_url, val, 'GET', 'dsrPast');
    console.log("COM WILL MOUNT")
  }
  componentDidUpdate(val) {
    this.setState({ loading: false })
  }
  handleSubmit(val) {
    const { apiFetch, UserLogin} = this.props;
    val.tdDate = val.tdDate.toLocaleDateString();
    let empId = this.props.UserLogin.empId || '127';
    var _url = Dsr_Url;
    val.empId = empId;
    this.props.apiFetch(_url, val, 'POST', 'dsrFormSubmitted');
  }

  render() {
    const {pristine, reset, submitting } = this.props
    const load = this.state.loading; const v = "ASASA"
    const loadingElement = <span>loading...</span>
    return (
      <div>
          <span>
          Welcpme {this.props.UserLogin.empName}
            <ReactCSSTransitionGroup transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
              <DsrPastTable DsrData={this.props.DsrData} />
              <div>
                <Button bsStyle="warning" onClick={() => this.setState({ open: !this.state.open })}>
                  Form
               </Button>
                <Panel >
                  <DsrForm onSubmit={this.handleSubmit.bind(this)} />
                </Panel>
              </div>
            </ReactCSSTransitionGroup>
          </span>

      </div>

    )
  }
}
Dsr.propTypes = {
  apiFetch: PropTypes.func,
  UserLogin: PropTypes.object
}
export default Dsr