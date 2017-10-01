import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../actions'
import { connect } from 'react-redux';

let FormTemplate = (props) => {
      const { handleSubmit, apiFetch } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
FormTemplate = reduxForm({
    form: 'initializeFromState'  // a unique identifier for this form
})(FormTemplate)

export default FormTemplate