import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

// App component
export default class ContentBottom extends React.Component {
    // pre-render logic
    componentWillMount() {
    }
    render() {
        const dummySentences = ['Express Scripts Holding Company is an American Fortune 100 company as of 2013, the 20th-largest in the United States and is the largest pharmacy benefit management organization in the United States, with 2013 revenues of $104.62 billion. '

        ];

        return (
            <Grid className="ContentBottom">
                <Row className="show-grid">
                    <Col sm={6} md={7}>
                        <h3 className="headingH13">ABOUT Company</h3>
                        <div> {dummySentences.slice(0, 6).join(' ')}
                            <span>
                                Headquarters: St. Louis, Missouri, United States CEO: Timothy C. Wentworth (May 2016)<br /><br />
                                Founded: 1986, St. Louis, Missouri, United States Net income: 1.845 USD (2013)
                            </span><br /><br />
                        </div>
                    </Col>
                    <Col sm={3} md={3}>
                        <h3 className="heading16">INNOVATION</h3>
                        <a href="/Navitri"><img src="./media/navriti.png"/></a>
                    </Col>
                    <Col sm={6} md={2}>
                        <h3 className="heading15">DSR</h3>
                        <a href="/Dsr"><img className="DsrSheet" src="./media/TSheets.jpg"/></a>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={6} md={9}>
                        <h3 className="headingH11">Announcements</h3>
                        {dummySentences.slice(0, 6).join(' ')}</Col>
                       <Col sm={6} md={3}>
                        <h3 className="headingH13">Knowledge Management</h3>
                        <a href="/KnowledgeManagement"><img className="DsrSheet" src="./media/KM.png"/></a>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
