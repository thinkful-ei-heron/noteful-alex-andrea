import React, { Component } from 'react';
import { Route, Switch }from 'react-router-dom';
import Mainpage from './Mainpage';
import Header from './Header';
import FolderView from './FolderView';
import NoteView from './NoteView';
import './dummy-store'
import './css/App.css'
import UserContext from './UserContext';
import dummyStore from './dummy-store';

class App extends Component {

  state = {
    notes: [],
    folders: [],
  }
  
  componentDidMount() {
    const folderUrl= 'http://localhost:9090/folders';
    const notesUrl='http://localhost:9090/notes';

    fetch(folderUrl)
      .then(res => {
        if(!res.ok){
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => this.setState({
        folders:res,
      }))
    
    // this.setState({
    //   notes: dummyStore.notes,
    //   folders: dummyStore.folders
    // })
  }

  render() {
    return (
      <UserContext.Provider value={{
        notes: this.state.notes,
        folders: this.state.folders
      }}>
        <main className='App'>
          <Route path='' component={Header} />
          <Switch>
            <Route path='/folder/:folderid/note/:noteid/' render={(props) => <><NoteView {...props}/></>}/>
            <Route path='/folder/:folderid/' render={(props)=> {
              return <FolderView {...props}/>}} />
            <Route exact path='/' render={(props)=> {
              return <Mainpage {...props}/>
            }} />
          </Switch>
        </main>
      </UserContext.Provider>
    );
  }

}

export default App;