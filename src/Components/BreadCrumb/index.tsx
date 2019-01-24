import React, { Component } from 'react';
import { Button, Jumbotron} from 'react-bootstrap';

interface bradCrumbPropInterface {
    fetchTopTunes: (type: string) => void; 
    type: string
}
class BradCrumb extends Component<bradCrumbPropInterface, {}> {
  render() {
    const { type, fetchTopTunes } = this.props
    return (
      <Jumbotron className="BradCrumb">
        <Button variant={type === 'itune' ? 'secondary' : 'light'} onClick={() => fetchTopTunes('itune')}> Itune List</Button>
        <Button variant={type !== 'itune' ? 'secondary' : 'light'} onClick={() => fetchTopTunes('spotify')}> Spotify List </Button>
      </Jumbotron>
    )
  }
}

export default BradCrumb;
