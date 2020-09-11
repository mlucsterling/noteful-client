import React from 'react'
import './AddFolder.css'

export default class AddFolder extends Component {
    constructor(props) {
        super(props);
        this.inputFolderName = React.createRef();
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const folderName = event.target.name.value;
        console.log('Folder Name: ', folderName);
        this.postNewFolder(folderName);
    };

    postNewFolder(folderName) {
        
    }

    render() {

        return (
            <div className="addFolder">
                <form id="addFolder-form" onSubmit={e => this.handleSubmit(e)}>
                    <label for="input-FolderName" />
                    <input type="text" name="inputFolderName" placeholder="FolderName" ref={this.inputFolderName}/>
                    <submit />
                </form>
            </div>
        )
    }
};