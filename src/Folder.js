import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Folder.css'

export default class Folder extends Component {
  
  function addFolder(folderId){
    fetch(`http:localhost:9090/folders`, {
      method: 'POST',
      body: JSON.stringify(folder),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(data =>{
      callback(folderId)
    })
    .catch(error => {
      console.error(error)
    })
  }

  render() {
    let link='/folder/'+this.props.id+'/'
    return (
      <NavLink activeClassName="active" to={link} className="folder">
        <p>{this.props.name}</p>
      </NavLink>
    )
  }
}
