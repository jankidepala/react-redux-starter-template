import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid, Row, Col } from 'react-bootstrap';
import { myAction, selectSubreddit, login } from '../actions';
import { bindActionCreators } from 'redux'
import { selecSer, apiFetch, UserLogin, increment } from '../actions'
import RegistrationForm from '../components/forms/RegistrationForm'
import { initialize } from 'redux-form';
import { ReduxAsyncConnect, asyncConnect, reducer as reduxAsyncConnect } from 'redux-async-connect'
import { myPage_Url } from '../actions/types'
import Login from '../components/forms/Login'

class KickStartApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }
    componentWillMount() {
        console.log('Component WILL MOUNT!', this.props.UserLogin.loading)
    }

    componentDidMount() {
        this.props.UserLogin.loading = true
        console.log('Component DID MOUNT!', this.props.UserLogin.loading)


    }
    renderSpinner() {
        if (!this.state.loading) {
            // Render nothing if not loading 
            return null;
        }
        return (
            <span className="spinner" />
        );
    }
    componentWillUpdate() {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }
    // {!this.props.UserLogin.login &&
    //     <Row className="show-grid">
    //         {React.cloneElement(this.props.children, this.props)}
    //     </Row>
    // }
    // {this.props.UserLogin.login &&
    //     <Row className="show-grid">
    //         Not logged in               
    //         <Login/>         </Row>
    // }
    render() {
        const { children, apiFetch, UserLogin, loaded} = this.props;
        return (

            <div>
                <Header {...this.props} />
                <div className="Content">
                    <Grid  >
                        <Row className="show-grid">
                            <Col sm={12} md={12}>
                                {React.cloneElement(this.props.children, this.props)}
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <Footer />
            </div>

        );
    }
}

//state binding
const mapStateToProps = (state) => ({
    PageLoadedData: state.PageLoadedData,
    posts: state.posts,
    comments: state.comments,
    UserLogin: state.UserLogin,
    DsrData: state.DsrData

})
//Action binding
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selecSer: selecSer, apiFetch, increment
    }, dispatch)
};

export default connect(
    mapStateToProps, mapDispatchToProps)(KickStartApp);
