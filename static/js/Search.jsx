import React from 'react';

const div={
  marginTop:'30px',
};
const h={
  color:'red',
  fontWeight:'bold',
  fontSize:'20px',
};
const btn={
  padding:'5px',
  backgroundColor: 'blue',
  color: 'white',
  border: '2px solid red',
  fontSize:'20px',
  borderRadius: '10px',
};

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'MohammadJozaa7'
    }
  }

  onChange (e) {
    console.log('YOU CHANGE: ',this.state.username)
    this.setState({
      username: e.target.value
    });
    // this.state.username=e.target.value
    // console.log('YOU CHANGE: ',this.state.username)
  }

  search() {
    // console.log('you want to search for',this.state.username)
    this.props.onSearch(this.state.username);
  }

  save() {
    // console.log('you want to save for',this.state.username)
    this.props.onSave(this.state.username);
  }

  render() {
    return (
      <div>
        <div style={div}>
          <h4 style={h}>  Enter a twitter username here:</h4>
        </div>
        <div style={div}>
          <input value={this.state.username} onChange={this.onChange.bind(this)}/>
        </div>
        <div style={div}>
          <button style={btn} onClick={this.search.bind(this)}>Get last 100 twite</button>
        </div>
        <div style={div}>
          <button style={btn} onClick={this.save.bind(this)}>Save this 100 twite</button>
        </div>
      </div>
    ) 
  }
}