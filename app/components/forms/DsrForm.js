import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import { orange500 } from "material-ui/styles/colors"
//import asyncValidate from './asyncValidate'
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import injectTapEventPlugin from 'react-tap-event-plugin';
import DatePicker from 'material-ui/DatePicker';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row, Table } from 'react-bootstrap'

const styles = {
    customWidth: {
        width: 200,
    },
};
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: orange500
    }
})
const validate = values => {
    const errors = {}
    const requiredFields = ['categoryid', 'area', 'ticketId', 'appId', 'taskDesc', 'tdDate', 'ticketStatusId', 'workHours']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        />
)

const renderCheckbox = ({ input, label }) => (
    <Checkbox label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange} />
)

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup {...input} {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)} />
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <span>
        <SelectField
            floatingLabelText={label}
            value="2222"
            errorText={touched && error}
            {...input}
            onChange={(event, index, value) => input.onChange(value)}
            children={children}
            {...custom} />
    </span>
)
let DateTimeFormat = global.Intl.DateTimeFormat;

const datePic = ({ input, label, meta: { touched, error }, children, ...custom, state }) => (

    <DatePicker
        autoOk={true}
        DateTimeFormat={DateTimeFormat} locale="en-AU"
        floatingLabelText="Date submitted on"
        //   disableYearSelection={this.state.disableYearSelection}
        name="tdDate" DateTimeFormat={DateTimeFormat}
        onChange={(e, val) => { return input.onChange(val) } }
        defaultDate={new Date()}

        />
)

const setFechaDesde = (x, event) => {
    console.log(JSON.stringify(event));
    console.log(JSON.stringify(x));
    this.setState({
        _date: date,
    });
}
const handleChangeMinDate = (event, date) => {
    this.setState({
        _date: date,
    });
};
class DsrForm extends React.Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.state = { value: 1 };
        const _date = new Date();
        _date.setHours(0, 0, 0, 0);
        this.state = {
            _date: _date,
            value: 1,
            autoOk: false,
            disableYearSelection: false,
        };

    }

    handleChangeMinDate = (event, date) => {
        this.setState({
            _date: date,
        });
    };
    /*
{  
   "categoryid":1,
   "ticketId":"54612",
   "empId":127,
   "area":"helloo",
   "appId":1,
   "taskDesc":"Phoenix",
   "tdDate":"12/12/2017",
   "ticketStatusId":1,
   "workHours":8
}
*/
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <form onSubmit={handleSubmit} className="DsrForm">
                    <div>
                        <Field name="ticketId" component={renderTextField} label="Ticket Id" />
                    </div>
                    <div>
                        <Field name="appId" value="22" component={renderSelectField} label="Application Id">
                            <MenuItem value={'1'} primaryText="CRSSPSO" />
                            <MenuItem value={'2'} primaryText="CDHPSO" />
                            <MenuItem value={'3'} primaryText="CRDPSO" />
                            <MenuItem value={'4'} primaryText="B2CPSO" />
                        </Field>
                    </div>
                    <div>
                        <Field name="area" value="22" component={renderSelectField} label="Area">
                            <MenuItem value={'1'} primaryText="Will be shared later" />
                            <MenuItem value={'2'} primaryText="Will be shared later" />
                            <MenuItem value={'3'} primaryText="Will be shared later" />
                        </Field>
                    </div>

                    <Field name="tdDate" autoOk={this.state.autoOk} floatingLabelText="Date" type="number" component={datePic} label="Work Hours" defaultDate={this.state._date} state={this.state} />
                    <div>
                        <Field name="categoryid" component={renderSelectField} label="Category ">
                            <MenuItem value={'1'} primaryText="Incident Capacity" />
                            <MenuItem value={'2'} primaryText="Problem ticket" />
                            <MenuItem value={'3'} primaryText="Service Request" />
                            <MenuItem value={'4'} primaryText="Non-Ticket" />
                            <MenuItem value={'5'} primaryText="Unproductive time" />
                            <MenuItem value={'6'} primaryText="Enhancements" />
                            <MenuItem value={'7'} primaryText="Out Of Office" />

                        </Field>
                    </div>
                    <div>
                        <Field name="workHours" type="number" component={renderTextField} label="Work Hours" />
                    </div>
                    <div>
                        <Field name="taskDesc" component={renderTextField} label="Task Description" multiLine={true} rows={2} />
                    </div>
                    <Row className="show-grid break">
                        <Col>
                            <div>
                                <button type="submit" disabled={pristine || submitting} className="btn btn-primary"  >Submit</button>
                                <button type="button" disabled={pristine || submitting} className="btn btn-primary" onClick={reset}>Reset Values
        </button>
                            </div>
                        </Col>
                    </Row>

                </form>

            </MuiThemeProvider>
        );
    }
}
export default reduxForm({
    form: 'DsrForm'  // a unique identifier for this form
    ,validate
    //, asyncValidate
})(DsrForm)