import React, { Component } from 'react';
import './App.css';

import NoteEntry from './NoteEntry'
import NoteListDisplay from './NoteListDisplay'

class App extends Component {
  constructor(props){
    super(props);
      
    this.state = { notelist: []}
    this.triggerNoteList = this.triggerNoteList.bind(this);   
  }
  
  triggerNoteList(list){
    this.setState({ notelist : list})
  }
  
  render() {
    return (
      <div className="App">
        <NoteEntry triggers={this.triggerNoteList}/>
        <NoteListDisplay notelist={this.state.notelist }  />
      </div>
    );
  }
}

export default App;