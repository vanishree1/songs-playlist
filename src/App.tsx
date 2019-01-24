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
  musicInfo: any,
  keyword: string
}


class App extends Component<{}, appStateInterface> {
  constructor(props: {}){
    super(props);
    this.state = { topTunes: [], type: 'itune', show: false, musicInfo: {}, keyword: ''}
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
      .then((res) => {
        console.log('status', res.error.status)
        if(res.error) {
          window.alert('Something went wrong!')
        } else {
          const topTunes = res.feed.entry
          this.setState({topTunes})
        }
      })
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

  onChnage = (event: any) => {
    const { value } = event.target;
    this.setState({
      keyword: value
    })
  }

  onSubmit = () => {
    const { topTunes, keyword } = this.state
    console.log('keyword', this.state.keyword)
    let result: any = [];
    topTunes.forEach(function(o: any){
      o['im:name'].label && o['im:name'].label.indexOf(keyword) >= 0 && result.push(o)
    });
    this.setState({
      topTunes : result
    })
  }

  render() {
    const { topTunes, type, show, musicInfo } = this.state
    return (
      <div className="App">
       <Header onChange={this.onChnage} onSubmit={this.onSubmit} />
       <BreadCrumb fetchTopTunes={this.fetchTopTunes} type={type} />
       <Table topTunes={topTunes}  viewDetail={this.viewDetail}/>
       <ViewModal show={show} handleClose={() => this.handleClose()} musicInfo={musicInfo}/>
      </div>
    );
  }
}

export default App;
