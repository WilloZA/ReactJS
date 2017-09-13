import {default as React, Component} from 'react';
import {Button, DropdownButton, MenuItem, ButtonToolbar, FormControl, Jumbotron,Col} from 'react-bootstrap';

export default class Grid extends Component {


    render() {       
        return (
            <Col md={12}>
                <Col md={4}>
                &nbsp;
                </Col>
                <Col md={4}>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                    <Col md={6}>
                        <div className="pull-left"><h4><strong>Subheading</strong></h4></div>
                        <div className="pull-left"><p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p></div>
                    </Col>
                </Col>
                <Col md={4}>
                 &nbsp;
                </Col>                               
            </Col>


        );
    }
}