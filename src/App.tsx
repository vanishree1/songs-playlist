import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import BreadCrumb from './Components/BreadCrumb';
import Table from './Components/Table';
import { ituneApi } from './Services/ituneApi'
import { spotifyApi } from './Services/spotifyApi'

class App extends Component {

  componentDidMount(){
    ituneApi()
      .then((item: object) => console.log('item ?', item))
      .catch((error) => console.warn(error))
  }

  fetchSpotifySongs = () => {
    this.setState({
      type: 'spotify'
    }, () => spotifyApi('hi')
      .then((res) => console.log('res', res))
      .catch((err) => console.warn('err', err))
      )
  }
  
  render() {
    return (
      <div className="App">
       <Header />
       <BreadCrumb />
       <Table />
      </div>
    );
  }
}

export default App;
