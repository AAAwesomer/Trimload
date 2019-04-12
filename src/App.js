/* global chrome */

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domain: '',
      images: []
    }
  }

  componentDidMount() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      this.setState({
        domain: domain,
      });
      this.getImages(domain);
    });
  }

  getImages(query) {
    console.log("hi")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Images
        </header>
      </div>
    );
  }
}

export default App;
