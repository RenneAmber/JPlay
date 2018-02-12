import React, { Component } from 'react';
import logo from './logo.svg';
import {Grid,Navbar,Jumbotron,Button} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
      return <div className="App">
          <Navbar inverse fixedTop>
              <Grid>
                  <Navbar.Header className="App-header">
                      <Navbar.Brand>
                          <img src={logo} className="App-logo" alt="logo"/>
                      </Navbar.Brand>
                      <Navbar.Toggle/>
                  </Navbar.Header>
              </Grid>
          </Navbar>
          <Jumbotron>
              <Grid>
                  <br/><br/><br/><br/><br/>
                  <h3>File upload:</h3>
                  <form action="/file_upload" method="post">
                      <div class="form-group">
                          <label> Please select a file to upload:</label>
                          <input type="file" class="form-control-file" name="image" size="200"/>
                      </div>
                      <Button bsStyle="success" bsSize={"large"} type="submit">Submit </Button>
                  </form>
              </Grid>
          </Jumbotron>
      </div>;
  }
}

export default App;
