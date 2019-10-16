import React, { Component } from 'react'
import FolderList from './FolderList';
import NoteList from './NoteList';
import './css/NoteView.css'

export default class NoteView extends Component {

  render() {
    return (
      <div className='main-elements'>
        <FolderList selectedId={this.props.match.params.folderid} selectedNote={this.props.match.params.noteid}/>
        <NoteList selectedNote={this.props.match.params.noteid}/>
        <button onClick={() => this.props.history.goBack()}>Go Back</button>
      </div>
    )
  }
}