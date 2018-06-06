import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './Search.jsx';
//import RepoList from './components/RepoList.jsx';

const h={
  color:'blue',
  fontWeight:'bold',
  fontSize:'25px',
  marginTop:'20px',
  // cursor: 'default',
  // align:'center'
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      twitters: []
    }
  }

  search (username) {
    console.log(`YOU WANT TO GET 100 TWITE FOR: ${username}`);
    // TODO
    // $.ajax({
    //   type: 'POST',
    //   url: '/twitters',
    //   data: {name: `${username}`},
    //   success: function s() {
    //     // body...
    //     console.log('success post after press button')
    //   }
    // });
  }

  save (username) {
    console.log(`YOU SAVE THIS 100 TWITE: ${username}`);
    // // TODO
    // $.ajax({
    //   type: 'POST',
    //   url: '/twitters',
    //   data: {name: `${username}`},
    //   success: function s() {
    //     // body...
    //     console.log('success post after press button')
    //   }
    // });
  }

  render () {
    return (
      <div>
        <center><h style={h}>Get the last 100 twitter</h></center>
        <center><Search onSearch={this.search.bind(this)}  onSave={this.save.bind(this)}/></center>
      </div>
    )
  }
}

//        <RepoList repos={this.state.repos}/>
