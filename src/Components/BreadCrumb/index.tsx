import React, { Component } from 'react';
import { Button, Jumbotron} from 'react-bootstrap';
import "./breadcrumb.scss";

interface bradCrumbPropInterface {
    fetchTopTunes: (type: string) => void; 
    type: string
}
class BradCrumb extends Component<bradCrumbPropInterface, {}> {
  render() {
    const { type, fetchTopTunes } = this.props
    return (
      <Jumbotron className="breadcrumb-wrapper">
      <div className="breadcrumb-text">
          Get Your Top 100 Songs from
      </div>
        <Button variant={type === 'itune' ? 'secondary' : 'light'} onClick={() => fetchTopTunes('itune')}> Itune List</Button>
        <Button variant={type !== 'itune' ? 'secondary' : 'light'} onClick={() => fetchTopTunes('spotify')}> Spotify List </Button>
      </Jumbotron>
    )
  }
}

export default BradCrumb;
