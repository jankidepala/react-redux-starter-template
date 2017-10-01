import React, { PropTypes } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'

const About = ({UserLogin}) =>
    <div className="AboutContainer">
        <Grid>
            <Row className="show-grid">
                <Col xs={6} md={3}><img src="media/profilePic.jpg" /></Col>
                <Col xs={4} md={4}>
                    <h3> {UserLogin.empName}</h3>
                    <h3 className="headingsAll">WHO AM I?</h3>
                    <span>
                        {UserLogin.aboutMe}
                    </span>
                </Col>
                <Col xs={4} md={4}>
                    <h4 className="headingsAll">TECHNOLOGIES</h4>
                    <span> {UserLogin.technologys.map((name, i) =>
                        <li key={i}>{name}</li>
                    )}
                    </span>
                    <h4 className="headingsAll">SPECIALITY</h4>
                    <span>
                        Java
                </span>
                    <h4 className="headingsAll">KLM PROFICIENCY</h4>
                    <span>
                        <li >★★ - Java</li>
                        <li >★★★- Front End</li>
                        <li >★ - CSS</li>
                    </span>
                    <h4 className="headingsAll">AWARDS</h4>
                    <span>
                        <li >★ - Star of the Month</li>
                        <li >Ace Award - Quarter</li>
                    </span>
                    <h4 className="headingsAll">HOBBIES</h4>
                    <span>
                        Tasbnd sadjnfkdmfn  fjgnfdj nvgjf dbvbj bjg
                </span>
                </Col>
            </Row>
        </Grid>    </div>;

About.propTypes = {
    UserLogin: PropTypes.object

};
export default About;
