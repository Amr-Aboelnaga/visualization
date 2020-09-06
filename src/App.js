import React from 'react';
import './App.css';
import Wrapper from './visualizer/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HeapBlock from './heapVisualizer/HeapBlock';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="visualization/#pathfinding">PathFinding</Nav.Link>
            <Nav.Link href="visualization/#sorting">Sorting</Nav.Link>
            <Nav.Link href="visualization/#datastructures">Data Structures</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <div style={{ "backgroundColor": "#282c34" }}>

        </div>

        <header className="App-header">
          <Route
            path="#sorting"
            component={HeapBlock}
            exact
          />
          <Route
            path="/visualization/pathfinding"
            component={Wrapper}
            exact
          />
        </header>

      </div>
    </Router >
  );
}

export default App;
