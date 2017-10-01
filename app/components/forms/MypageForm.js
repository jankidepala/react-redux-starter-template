import React, { Component, PropTypes } from 'react'
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

class MypageForm extends Component {
    //et MypageForm = (props) => {
    static propTypes = {
        text: PropTypes.string
    }

    state = {
        editing: false,
        text: this.props.text
    }
    handleDoubleClick = () => {
        this.setState({ editing: true })
    }
    handleChange = e => {
        this.setState({ text: e.target.value })
    }
    handleSubmit = e => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            // this.props.onSave(text)
            this.setState({ editing: false })
        }
    }
    render() {
        const { error, handleSubmit, pristine, reset, submitting} = this.props
        let element
        if (this.state.editing) {
            element = (
                <span>
                    <textarea
                        type="text"
                        autoFocus="true"
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyDown={this.handleSubmit}
                        />
                </span>

            )
        } else {
            element = (
                <span onDoubleClick={this.handleDoubleClick}>
                    {this.state.text}
                </span>

            )
        }
        return (
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <Row className="show-grid">
                        {element}
                        <Col xs={12} md={12}>
                        </Col>

                    </Row>
                </form>
            </div >
        )
    }
}


MypageForm = reduxForm({
    form: 'initializeFromState',
    //  validate,
    //warn
})(MypageForm)

export default MypageForm