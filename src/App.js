import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <div>
        <NavBar/>
        <News apiKey={this.apiKey} />
        
      </div>
    )
  }
}
