import {default as React, Component} from 'react';
import {Nav, NavItem, Col,Button} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import {getInitialState} from 'react-dom';
import logo from './logo.svg';
import About from './About';
export default class Navbar extends Component {

    render() {
        return (
                <Col md={12}>
                    <Col md={4}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                    <Col md={4}>
                        <Col md={5}>
                        <h4 className="pull-left">My Project</h4>
                        </Col>

                        <Nav bsStyle="pills" activeKey={1}>
                            <NavItem eventKey={1} href="/home">Home</NavItem>
                            <NavItem href="/about">About</NavItem>
                            <NavItem href="/contact">Contact</NavItem>
                        </Nav>
                        <hr/>
                    </Col>
                    <Col md={4}>
                       <img src={logo} className="App-logo" alt="logo" />
                    </Col>
                </Col>
        );

        function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}
    }
}
