import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux'


class ContactForm extends React.Component {
  render() {
    const { fields: {name, address, phone}, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" {...name}/>

        <button onClick={() => load(data)}>Submit</button>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: 'contact',                      // the name of your form and the key to
                                        // where your form's state will be mounted
  fields: ['name', 'address', 'phone']// a list of all your fields in your form
             // a synchronous validation function
})(ContactForm);


// You have to connect() to any reducers that you wish to connect to yourself
ContactForm = connect(
  state => ({
    initialValues: state.form.name // pull initial values from account reducer
  })             // bind account loading action creator
)(ContactForm)

export default ContactForm;