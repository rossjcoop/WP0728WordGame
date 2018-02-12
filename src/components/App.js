import React, { Component } from 'react';
import '../styles/App.css';
import hello from '../hello';

class App extends Component {

  state = {
      words: ""
    };

  componentWillMount() {
    let wordsArr = hello.toLowerCase().split("\n")

    let wordsArr2 = ["hello", "world"]
    let randWord = wordsArr2[Math.floor(Math.random() * wordsArr2.length)];
    console.log("Hello file", wordsArr)
    // this.setState({words: words.}) 
  }
  render() {
    return (
        <div>
          <h1>{this.state.words}</h1>
        </div>     
    );
  }
}

export default App;
