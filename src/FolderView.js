import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import './dummy-store';
import './css/FolderView.css'

export default class FolderView extends Component {

  render() {
    return (
      <div className='main-elements'>
        <FolderList selectedId={this.props.match.params.folderid}/>
        <NoteList selectedId={this.props.match.params.folderid} />
        <div className="folder-view"></div>
      </div>
    )
  }
}