import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}


export default App;
