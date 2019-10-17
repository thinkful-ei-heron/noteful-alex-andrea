import React from 'react';


export default class AddFolder extends React.Component {

    handleSubmit= (e) =>{
        e.preventDefault();
        const addedFolder = e.target['folder-name'].value;
        this.props.addFolder(addedFolder);
        e.target['folder-name'].value= '';
    }
//comment
    render() {
        return (
            <form className= 'add-folder' onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor='folder-name'> Folder Name:</label>
                <input type='text' name='folder-name' id='folder-name'/>
                <button type='submit'>Add</button>
            </form>
        )
    }
}
