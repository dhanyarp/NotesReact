import React, { Component } from 'react';
import axios from 'axios';

class NoteEntry extends Component {
    constructor(props) {
        super(props);
        this.noteinputs= [];
        this.state = {            
            titleValue: '',
            contentValue : '' ,
            userId : '' ,
            noteId : ''        
        }

        this.addNote = this.addNote.bind(this);
        this.updateTitleValue = this.updateTitleValue.bind(this);
        this.updateContentValue = this.updateContentValue.bind(this);
        this.addNoteAPI = this.addNoteAPI.bind(this);
    }

    addNote(e) {       
        e.preventDefault();        
        if (this.state.titleValue === "" || this.state.contentValue === "" ) return;
       let note= {
           "NoteId" : '',
            "UserId" : this.state.userId,
            "Title" : this.state.titleValue,
            "Content" : this.state.contentValue
        }
        //this.noteinputs.push(note);
        this.addNoteAPI(this.noteinputs);
        this.setState( { titleValue: '', contentValue : ''});   
        this.props.triggers(this.noteinputs); 
    }

    addNoteAPI =(note)=>{
        if(this.state.userId === ''){
            var userheader = {
                'Content-Type': 'application/json'                
            }
        axios.post('http://localhost/NoteAPI/add/user', {
            FirstName: 'Fred',
            LastName: 'Flintstone',
            Email : 'a@b.com',
            password : '1234'
          }, {headers: userheader})
          .then(function (response) {
            console.log(response);
            this.setState( { userId: response});
            note.UserId = response;  
          })
          .catch(function (error) {
            console.log(error);
          });
        }

        var headers = {
            'Content-Type': 'application/json',
            'Authorization': note.UserId
        }
        axios.post('http://localhost/NoteAPI/note',note, {headers: headers})
          .then(function (response) {
            console.log(response);
            this.setState( { noteId: response}); 
            note.NoteId =  response;
            this.noteinputs.push(note);
          })
          .catch(function (error) {
            console.log(error);
          });
        };

    updateTitleValue(e) {
        this.setState({
            titleValue: e.target.value
        })   
    }


    updateContentValue(e) {
        this.setState({
            contentValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNote}>
                    Enter the Note
                    <br />
                    Title : <input type="text" value={this.state.titleValue} onChange = {this.updateTitleValue}/>
                    <br />

                    Content: <input type="text" value={this.state.contentValue} onChange = {this.updateContentValue}/>
                   <br/>
                    <input type="button" onClick={this.addNote} style={{ width: 50 }} title='Add' />
                </form>
            </div>
        );
    }
}


export default NoteEntry;