import React, { SyntheticEvent } from "react";
import { IFile, IFileUploaderProps, IFileUploaderState } from "./FileUploader.model";
import './FileUploader.scss';
import { List } from "./list/List";
import { SelectDrop } from "./select-drop/SelectDrop";



export class FileUploader extends React.PureComponent<IFileUploaderProps , IFileUploaderState> {
    constructor(props: IFileUploaderProps){
        super(props);
        this.state = {
            files: []
        }
    }

    onFileInputEvent(file: IFile){
        this.setState({files: [...this.state.files , file]});
    }

    render(){
        return (
            <section className="file-uploader-wrapper">
                <div className="file-uploader__select-drop">
                    <SelectDrop  onFileInput={this.onFileInputEvent.bind(this)}/>
                </div>
                <div className="file-uploader__list">
                    <List files={this.state.files} />
                </div>
            </section>
        );
    }
}