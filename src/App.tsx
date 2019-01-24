import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Components/Header';
import BreadCrumb from './Components/BreadCrumb';
import Table from './Components/Table';
import { ituneApi } from './Services/ituneApi'
import { spotifyApi } from './Services/spotifyApi'
import ViewModal from './Components/Modal'

interface appStateInterface{
  topTunes : any,
  type: string,
  show: boolean,
  musicInfo: any
}

class App extends Component<{}, appStateInterface> {
  constructor(props: {}){
    super(props);
    this.state = { topTunes: [], type: 'itune', show: false, musicInfo: {}}
  }

  componentDidMount(){
   ituneApi()
      .then((item: any) => {
        const topTunes = item.feed.entry
        this.setState({topTunes})
      })
      .catch((error) => console.warn(error))
  }

  fetchTopTunes = (type: string) => {
    const api = type !== 'itune' ? spotifyApi : ituneApi
    this.setState({
      type
    }, () => api()
      .then((res) => console.log('res', res))
      .catch((err) => console.warn('err', err))
      )
  }
  
  viewDetail = (row: any) => {
    this.setState({
      show: true,
      musicInfo: row
    })
  }

  handleClose= () => {
    this.setState({
      show: false
    })
  }

  render() {
    const { topTunes, type, show, musicInfo } = this.state
    return (
      <div className="App">
       <Header />
       <BreadCrumb fetchTopTunes={this.fetchTopTunes} type={type} />
       <Table topTunes={topTunes}  viewDetail={this.viewDetail}/>
       <ViewModal show={show} handleClose={() => this.handleClose()} musicInfo={musicInfo}/>
      </div>
    );
  }
}

export default App;
