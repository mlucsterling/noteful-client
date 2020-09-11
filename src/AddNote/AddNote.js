import React, { Component } from 'react'
import './AddNote.css'

export default class AddNote extends Component {
    constructor(props) {
        super(props);
        this.inputNoteName = React.createRef();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const noteName = event.target.name.value;
        console.log('Note Name: ', noteName);
        this.postNewNote(noteName);
    };
    
    render() {
        return(
            <div>
                <form id="addNote-form" onSubmit={e => this.handleSubmit(e)}>
                    <label for="input-NoteName" />
                    <input type="text" name="inputNoteName" placeholder="NoteName" ref={this.inputNoteName}/>
                    <submit />
                </form>
            </div>
        )
    }
}