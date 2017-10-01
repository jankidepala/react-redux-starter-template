import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';

// App component
export default class KnowledgeManagement extends React.Component {
    // pre-render logic
    componentWillMount() {
    }
    render() {

        return (
            <Grid className="ContentBottom formContainer">
                <h3>Knowledge Management Initiative</h3>
                <Row className="show-grid">
                    <h4> How this initiative helps us individually??</h4>
                    <ul>
                        <li>Skill proficiency upgrade required for career growth</li>

                        <li>Certifications help to grasp new opportunities across Accenture</li>

                        <li>Active participation will assist you to be seen as distinguished achiever
    during Performance achievement( Priorities will have to be set ).</li>

                        <li>Goodies planned for any milestones achieved.</li>
                    </ul>
                    
                </Row>
            </Grid>
        );
    }
}
