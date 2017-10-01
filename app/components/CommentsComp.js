import React, { PropTypes } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
const CommentsComp = () => (
    <div className="headerContainer">
        <Grid fluid>            
            <Row className="show-grid">
                <Col xs={9} md={9}>
                <Link  to="/about" ><img src="./media/accentre.png" />
                </Link><img src="./media/Esi.png" /></Col>                  

            </Row>
         
        </Grid>
    </div>

);

CommentsComp.propTypes = {
    children: PropTypes.object,
    name: PropTypes.object

};

export default CommentsComp;
