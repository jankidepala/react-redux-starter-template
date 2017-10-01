import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row, Table } from 'react-bootstrap'


class NavritiPastSubmission extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const { handleSubmit, pristine, reset, submitting, DsrData } = this.props

        return (
            <div className="formContainer">
                <h3 className="headingH13">Form</h3>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date Submitted</th>
                            <th>Ticket Id</th>
                            <th>Status</th>
                            <th>Task Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.DsrData.map((_d, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{_d.applicationName}</td>
                                <td>{_d.tdDate}</td>
                                <td>{_d.categoryName}</td>
                                <td>{_d.ticketId}</td>
                                <td>{_d.area}</td>
                                <td>{_d.taskDesc}</td>
                                <td>{_d.workHours}</td>
                            </tr>)
                        )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}
NavritiPastSubmission.propTypes = {
    DsrData: PropTypes.array
}
export default reduxForm({
    form: 'NavritiPastSubmission'  // a unique identifier for this form
    //,validate
    //, asyncValidate
})(NavritiPastSubmission)