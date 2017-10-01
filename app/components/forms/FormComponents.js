import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, ControlLabel, Radio, Row, Table } from 'react-bootstrap'
import Dropzone from 'react-dropzone';
import DropdownList from 'react-widgets/lib/DropdownList'
import SelectList from 'react-widgets/lib/SelectList'
import Multiselect from 'react-widgets/lib/Multiselect'

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <span>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </span>
)
export const renderFieldcCt = ({ input, label, type, meta: { touched, error, warning } }) => (
  <span className="ct">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </span>
)

export const dropDown = ({ input, label, type, meta: { touched, error, warning }, ...rest  }) => (
  <span>
    <label>{label}</label>
    <div>
      <DropdownList {...input} {...rest} />
      <input {...input} placeholder={label} type={type} />
      {touched && ((error && <span className="err">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </span>
)

export const renderDropdownList = ({ input, ...rest }) =>
  <DropdownList {...input} {...rest} />

export const renderDropzoneInput = (field, {label}) => {
  const files = field.input.value;
  return (
    <span>
      <label>{label}</label>
      <div className="dropZoneLoader">
        <Dropzone
          name='imgSrc'
          onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
        >
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
export const renderSelectList = ({label, input, ...rest }) =>
  <span>
    <label>{label}</label>
    <SelectList {...input} onBlur={() => input.onBlur()} {...rest} />
  </span>

export const renderMultiselect = ({ input, label, ...rest }) =>
  <span>
    <label>{label}</label>
    <Multiselect {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      {...rest} />
  </span>