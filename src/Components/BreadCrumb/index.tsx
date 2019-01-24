import React, { Component } from 'react';
import { Button, Jumbotron} from 'react-bootstrap';

class BradCrumb extends Component {
  render() {
    return (
      <Jumbotron className="BradCrumb">
        <Button variant="light"> Itune List</Button>
        <Button variant="secondary"> Spotify List </Button>
      </Jumbotron>
    )
  }
}

export default BradCrumb;
