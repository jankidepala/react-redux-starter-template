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
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';

const validate = values => {
    const errors = {}
    const requiredFields = ['firstName', 'lastName', 'email', 'favoriteColor', 'notes']
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
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
    <SelectField
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        onChange={(event, index, value) => input.onChange(value)}
        children={children}
        {...custom} />
)
const muiTheme = getMuiTheme({
    palette: {
        accent1Color: orange500
    }
})
const dataSource1 = [
    {
        text: 'text-value1',
        value: (
            <MenuItem
                primaryText="text-value1"
                secondaryText="&#9786;"
                />
        ),
    },
    {
        text: 'text-value2',
        value: (
            <MenuItem
                primaryText="text-value2"
                secondaryText="&#9786;"
                />
        ),
    },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
    { textKey: 'Some Text', valueKey: 'someFirstValue' },
    { textKey: 'Some Text', valueKey: 'someSecondValue' },
];
const dataSourceConfig = {
    text: 'textKey',
    value: 'valueKey',
};

const handleChange = (event, index, value) => this.setState({ value });

const MaterialUiForm2 = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    const colors = [
        'Red',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Black',
        'White',
    ];
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <form onSubmit={handleSubmit}>
                    <DropDownMenu value={dataSource2} onChange={handleChange}>
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>
                    <br />
                    <DropDownMenu
                        value={dataSource2}
                        onChange={handleChange}
                        style={styles.customWidth}
                        autoWidth={false}
                        >
                        <MenuItem value={1} primaryText="Custom width" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>
                    <AutoComplete
                        hintText="text-value data"

                        dataSource={dataSource1}
                        /><br />
                    <AutoComplete
                        floatingLabelText="Type 'r', case insensitive"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={colors}
                        />
                    <AutoComplete
                        floatingLabelText="showAllItems"
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        dataSource={dataSource2}
                        /><br />
                    <AutoComplete
                        floatingLabelText="Same text, different values"
                        filter={AutoComplete.noFilter}
                        openOnFocus={true}
                        dataSource={dataSource3}
                        dataSourceConfig={dataSourceConfig}
                        />
                    <div>
                        <Field name="firstName" component={renderTextField} label="First Name" />
                    </div>
                    <div>
                        <Field name="lastName" component={renderTextField} label="Last Name" />
                    </div>
                    <div>
                        <Field name="email" component={renderTextField} label="Email" />
                    </div>
                    <div>
                        <Field name="sex" component={renderRadioGroup}>
                            <RadioButton value="male" label="male" />
                            <RadioButton value="female" label="female" />
                        </Field>
                    </div>
                    <div>
                        <Field name="favoriteColor" component={renderSelectField} label="Favorite Color">
                            <MenuItem value={'ff0000'} primaryText="Red" />
                            <MenuItem value={'00ff00'} primaryText="Green" />
                            <MenuItem value={'0000ff'} primaryText="Blue" />
                        </Field>
                    </div>
                    <div>
                        <Field name="employed" component={renderCheckbox} label="Employed" />
                    </div>
                    <div>
                        <Field name="notes" component={renderTextField} label="Notes" multiLine={true} rows={2} />
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    )
}

export default reduxForm({
    form: 'form',  // a unique identifier for this form
    validate
    //, asyncValidate
})(MaterialUiForm2)