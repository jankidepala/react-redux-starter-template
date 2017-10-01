import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    //const Header = ({UserLogin}) => (
    render() {
        const { UserLogin} = this.props
        return (
            <div className="headerContainer">
                <Grid fluid>

                    <Row className="show-grid">
                        <Col xs={5} md={9}><Link to="/Spotlight" ><img src="./media/someLogo.png" /></Link></Col>
                        {this.props.UserLogin.login &&
                            <Col xs={6} md={3} >Welcome {this.props.UserLogin.empName}<Link to="/about" ><img className="imgHeader" src="media/profilePic.jpg" /></Link>
                                <Link to="/Login">| Logout</Link>
                            </Col>
                        }
                        {!this.props.UserLogin.login &&
                            <Col xs={7} md={3} >
                                <p className="pull-right"> Home | Sitemap | Contact</p>
                            </Col>
                        }
                    </Row>
                        <Navbar >
                            <Link className="navy" to="/">Home</Link>
                            <Link className="navy" to="/Dsr">iPad</Link>
                            <Link className="navy" to="/Navitri">iPhone</Link>
                            <Link className="navy" to="/about">Watch</Link>
                            <Link className="navy" to="/PhotoGallery">gallery</Link>
                            <Link className="navy" to="/about">my profile</Link>
                            
                        </Navbar>
                </Grid>
            </div>

        )
    };
}
Header.propTypes = {
    UserLogin: PropTypes.object,
    name: PropTypes.object

};

export default Header;
