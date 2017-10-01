import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

// App component
export default class ContentBottom extends React.Component {
    // pre-render logic
    componentWillMount() {
    }
    render() {
        const dummySentences = ['The new Files app brings all your files together. You can easily browse, search and organise all your files in one place. And there’s a dedicated place for your recent files — those on your iPad as well as in apps, on your other iOS devices, in iCloud Drive and across other services like Box and Dropbox.'

        ];

        return (
            <Grid className="ContentBottom">
                <Row className="show-grid">
                    <Col sm={6} md={7}>
                        <h3 className="headingH13">ios-11</h3>
                        <div> {dummySentences.slice(0, 6).join(' ')}
                            <span>
                            The new Dock is a foundational change for iPad. It’s now available from any screen. So with just a swipe, you can open and switch apps instantly. And you can customise it with more of your favourites. Apps you’ve opened recently and apps that are currently open on your iPhone or Mac appear in the right side of the Dock.                            
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
