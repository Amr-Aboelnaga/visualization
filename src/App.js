import React from 'react';
import './App.css';
import Wrapper from './visualizer/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import {
  HashRouter,
  Route,
} from "react-router-dom";
import HeapBlock from './heapVisualizer/HeapBlock';
import SortingVisualizer from './sortingVisualizer/SortingVisualizer';
import useWindowDimensions from './hooks/windowSizeHook';

function App() {
  const { height, width } = useWindowDimensions()
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <LinkContainer to="/pathfinding">
              <Button variant="outline-info">PathFinding</Button>
            </LinkContainer>

            <LinkContainer to="/heapvisualization">
              <Button variant="outline-info">HeapVisualization</Button>

            </LinkContainer>
            <LinkContainer to="/sortingvisualization">
              <Button variant="outline-info">SortingVisualization</Button>

            </LinkContainer>

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
            path='/heapvisualization'
            render={() => (
              <HeapBlock width={width} height={height} />
            )}
            exact
          />
          <Route
            path="/pathfinding"
            render={() => (
              <Wrapper width={width} height={height} />
            )}
            exact
          />
          <Route
            path="/sortingvisualization"
            render={() => (
              <SortingVisualizer width={width} height={height} />
            )}
            exact
          />
        </header>

      </div>
    </HashRouter >
  );
}

export default App;
