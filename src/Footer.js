import {default as React, Component} from 'react';
import {Button, DropdownButton, MenuItem, ButtonToolbar, FormControl, Jumbotron,Col,Glyphicon} from 'react-bootstrap';

export default class Footer extends Component {


    render() {
        let myTitle =
                    <h1>Hello To The World</h1>

        return (
            <Col md={12}>
                <Col md={4}>
                &nbsp;
                </Col>
                <Col md={4}>
                    <hr/>
                     <h5 className="pull-left"><Glyphicon glyph="glyphicon glyphicon-copyright-mark" />&nbsp;COMPRSA</h5>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>                               
            </Col>


        );
    }
}