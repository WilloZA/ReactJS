import {default as React, Component} from 'react';
import {Button, DropdownButton, MenuItem, ButtonToolbar, FormControl, Jumbotron,Col} from 'react-bootstrap';

export default class MyDropdown extends Component {


    render() {
        let myTitle =
                    <h1>Hello To The World</h1>

        return (
            <Col md={12}>
                <Col md={4}>
                &nbsp;
                </Col>
                <Col md={4}>
                    <Jumbotron>
                        <h1>{myTitle}</h1>
                            <p className="center">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <p><Button bsStyle="success">Sign Up</Button></p>
                    </Jumbotron>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>                               
            </Col>


        );
    }
}