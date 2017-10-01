import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { apiFetch } from '../../actions'
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, Button, Col, Grid, ControlLabel, Radio, Row } from 'react-bootstrap'
import { Link } from 'react-router';
import MypageForm from './MypageForm'
import { Login_Url } from '../../actions/types'

class Mypage extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(val) {
        const { apiFetch} = this.props;
        var t = {
            "username": "testuser",
            "pwd": "testuser"
        }
        var _url = Login_Url;
        this.props.apiFetch(_url, val, 'POST', 'login');
    }


    render() {
        const { error, pristine, reset, submitting, onSubmit, apiFetch, UserLogin} = this.props
        return (
            <div className="AboutContainer">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={6} md={3}><img src="media/profilePic.jpg" /></Col>
                        <Col xs={4} md={4}>
                            <h3> {UserLogin.empName}</h3>
                            <h3 className="headingsAll">WHO AM I?</h3>
                            <span>
                                <MypageForm onSubmit={this.handleSubmit.bind(this)} text={UserLogin.aboutMe} />
                            </span>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
Mypage.propTypes = {
    apiFetch: PropTypes.func,
    UserLogin: PropTypes.array
}
export default Mypage