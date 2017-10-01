import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
// import the colors wanted to customize your theme here, if you want to
import { orange500 } from "material-ui/styles/colors"
//import asyncValidate from './asyncValidate'
import AutoComplete from 'material-ui/AutoComplete';
import DropDownMenu from 'material-ui/DropDownMenu';
import injectTapEventPlugin from 'react-tap-event-plugin';

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
class MaterialUiForm extends React.Component {
    constructor(props) {
        super(props);
        injectTapEventPlugin();
        this.state = { value: 1 };
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <form >
                    <div>
                        <TextField
                            hintText="Hint Text"
                            /><br />
                        <TextField
                            hintText="Message Field"
                            floatingLabelText="MultiLine and FloatingLabel"
                            multiLine={true}
                            rows={2}
                            /><br />
                    </div>
                    <div>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>
                        <br />
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                            >
                            <MenuItem value={1} primaryText="Custom width" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>

                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
                    </div>
                </form>

            </MuiThemeProvider>
        );
    }
}
export default reduxForm({
    form: 'MaterialUiForm'  // a unique identifier for this form
    //,validate
    //, asyncValidate
})(MaterialUiForm)