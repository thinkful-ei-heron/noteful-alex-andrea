import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Note.css'

// function deleteNote(noteId, callback)
//   fetch(endpointurl+`/${noteId}`, {
//     method: 'DELETE',


export default class Note extends Component {

  


  render() {
      let linkDest = '/folder/' + this.props.folderId + '/note/' + this.props.id
      return (
        <div>
          <Link to={linkDest} className="note">
            <h3 className="note-header">
              {this.props.name}
            </h3>
          </Link>
          {this.props.selectedNote ? <p>{this.props.content}</p> : <></>}
            <p>Date modified on {this.props.modified}</p>
          <div className="note-delete">
            <button>Delete Note</button>
          </div>
        </div>
      )
    
  }
}