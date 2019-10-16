import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Folder.css'

export default class Folder extends Component {
  

  render() {
    let link='/folder/'+this.props.id+'/'
    return (
      <NavLink activeClassName="active" to={link} className="folder">
        <p>{this.props.name}</p>
      </NavLink>
    )
  }
}
