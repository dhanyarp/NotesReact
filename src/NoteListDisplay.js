import React, { Component }  from 'react';


class NoteListDisplay extends Component{
    constructor(props){
        super(props);   
    }

    render(){
        return (
          <div>
          <ul>
         
          {this.props.notelist.map((list, i) => {
            return (
              <li key={i}> 
                {list.Title}
                   '   -     '    
                {list.Content}             
              </li>
            );
          })}
        </ul>          
          
          </div>
        )
            
    }
}


export default NoteListDisplay;